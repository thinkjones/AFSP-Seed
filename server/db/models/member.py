from sqlalchemy import Column, Integer, String
from server.db.database import Base


class Member(Base):
    """ Members of the library """
    __tablename__ = 'members'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    email = Column(String(120), unique=True)

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<User %r>' % (self.name)
