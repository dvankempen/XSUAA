# app server
from flask import Flask
app = Flask(__name__)

# home page
@app.route('/')
def hello_world():
    return "Hello World!"
