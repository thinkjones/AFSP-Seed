from flask import Blueprint, Flask, send_from_directory, request
from book_handlers import book_blueprint
from flask_injector import FlaskInjector
from injector import singleton
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from db.models.member import Member
from db.database import db_session, init_db

app = Flask(__name__)
app.static_folder = '../client'
app.static_url_path = ''
app.register_blueprint(book_blueprint)


@app.route('/')
def route_file():
    return app.send_static_file('index.html')


@app.route('/<path:filename>')
def send_app_files(filename):
    return send_from_directory(app.static_folder + '/', filename)


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


def configure(binder):
    binder.bind(SQLAlchemy, to=db_session, scope=singleton)


def install_books():
    init_db()
    member = Member('admin', 'admin@localhost')
    db_session.add(member)
    db_session.commit()


FlaskInjector(app=app, modules=[configure], use_annotations=True)
install_books()
