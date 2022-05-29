from marshmallow import fields, validates, ValidationError
from flask_marshmallow import Marshmallow
from .model import Book


ma = Marshmallow()

def configure(app):
    ma.init_app(app)


class BookSchema(ma.Schema):
    class Meta:
        model = Book
        load_instance = True

    book = fields.Str(required=True)    

