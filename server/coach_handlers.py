import logging
from flask import Blueprint, jsonify
from flask_sqlalchemy import SQLAlchemy
from injector import inject

coach_blueprint = Blueprint('coach_blueprint', __name__)
logger = logging.getLogger(__name__)


@coach_blueprint.route('/api/coaches', methods=['GET'])
@inject(db_session=SQLAlchemy)
def get_all_coaches(db_session):
    return jsonify({'test': 'gene'})


