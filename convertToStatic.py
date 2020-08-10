from server import app
from flask_frozen import Freezer

if __name__ == "__main__":
    app.config.from_pyfile('settings.py')   # Load Freezer specific settings
    freezer = Freezer(app)
    freezer.freeze()