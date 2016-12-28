from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
from server.db.database import Base
from sqlalchemy.orm import relationship


class Reservation(Base):
    """ A reservation of a book in the library """
    __tablename__ = 'reservations'
    id = Column(Integer, primary_key=True)
    reserved = Column(DateTime, nullable=False)
    due_back = Column(DateTime, nullable=False)
    member_id = Column(Integer, ForeignKey('member.id'), nullable=False)
    member = relationship("Member")
    book_id = Column(Integer, ForeignKey('book.id'), nullable=False)
    book = relationship("Book")

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<User %r>' % (self.name)
