from flask import Blueprint, current_app, request, jsonify
from .model import Book
from .serealizer import BookSchema


bp_books = Blueprint('books', __name__)

@bp_books.route('/books', methods=['GET'])
def books():
    bs = BookSchema(many=True)
    result = Book.query.all()
    return bs.jsonify(result), 200

@bp_books.route('/create-book', methods=['POST'])
# REFAZER usando https://marshmallow.readthedocs.io/en/stable/examples.html marshmallow 3
# 
# def create_book():
#     bs = BookSchema()
#     book, error =  bs.load(request.json)

#     if error:
#         return jsonify(error), 401
    
#     current_app.db.session.add(book)
#     current_app.db.session.commit()
#     return {}

@bp_books.route('/update-book', methods=['POST'])
def update_book():
    pass

@bp_books.route('/delete-book', methods=['POST'])
def delete_book():
    pass

