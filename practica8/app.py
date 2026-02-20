from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["catelera"]
collection = db["eventos"]

@app.route('/eventos')
def obtener_eventos():
    eventos = []

    for evento in collection.find():
        eventos.append({
            "titulo": evento.get("titulo"),
            "fecha": evento.get("fecha"),
            "lugar": evento.get("lugar"),
            "categoria": evento.get("categoria"),
            "precio": evento.get("precio")
        })

    return jsonify(eventos)

if __name__ == '__main__':
    app.run(debug=True)