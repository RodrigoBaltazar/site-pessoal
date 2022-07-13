from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def configure(app):
    db.init_app(app)
    app.db = db


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    book = db.Column(db.String(255))
    reading = db.Column(db.Boolean())
    had_read = db.Column(db.Boolean())
    to_read = db.Column(db.Boolean())
    img_path = db.Column(db.String(255))