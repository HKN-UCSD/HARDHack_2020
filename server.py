from flask import Flask, render_template, redirect, url_for
from flask_flatpages import FlatPages
from flask_frozen import Freezer
import yaml

app = Flask(__name__)
app.config.from_pyfile('settings.py')
pages = FlatPages(app)
freezer = Freezer(app)

with open('./data/PageData.yaml') as file:
    content = yaml.load(file)


@app.template_filter("indexDataTupleFromCollection")
def getIndexDataTupleFromCollection(collection):
    return [(index, data) for index, data in enumerate(collection)]


@app.template_filter("getFaqbarBGColorForIndex")
def getFaqbarBGColorForIndex(index, baseColor, colorIncrement):
    return "#{:08x}".format(int(baseColor) + index * int(colorIncrement))


@app.template_filter("getEventContentDisplay")
def getEventContentDisplay(isEventOver, displayStyle):
    return "none" if isEventOver else displayStyle


@app.route('/index.html', methods=['GET'])
def home():
    return render_template('2019.html', content=content)


if __name__ == "__main__":
    freezer.freeze()
    app.run(debug=True)
