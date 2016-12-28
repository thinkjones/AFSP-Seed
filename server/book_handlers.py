import logging
from flask import Blueprint, jsonify
from flask_sqlalchemy import SQLAlchemy
from injector import inject

book_blueprint = Blueprint('book_blueprint', __name__)
logger = logging.getLogger(__name__)


@book_blueprint.route('/api/books', methods=['GET'])
@inject(db_session=SQLAlchemy)
def get_all_books(db_session):
    return jsonify({'test': 'gene'})


