from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify(message="wenas desde un json penca")

if __name__ == '__main__':
    app.run(debug=True)
