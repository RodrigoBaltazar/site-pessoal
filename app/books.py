from flask import Blueprint, current_app, request
from .model import Book
from .serealizer import BookSchema


bp_books = Blueprint('books', __name__)

@bp_books.route('/books', methods=['GET'])
def books():
    bs = BookSchema(many=True)
    result = Book.query.all()
    return bs.jsonify(result), 200

@bp_books.route('/create-book', methods=['POST'])
def create_book():
    bs = BookSchema()
    book, error =  bs.load(request.json)
    current_app.db.session.add(book)
    current_app.db.session.commit()

    return bs.jsonify(book), 201

@bp_books.route('/update-book', methods=['POST'])
def update_book():
    pass

@bp_books.route('/delete-book', methods=['POST'])
def delete_book():
    pass

