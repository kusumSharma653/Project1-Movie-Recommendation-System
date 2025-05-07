from flask import Flask, request, jsonify
import pickle
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Load pickled files
movies = pickle.load(open('movie_list.pkl', 'rb'))
similarity = pickle.load(open('similarity.pkl', 'rb'))

@app.route('/')
def home():
    return jsonify({'message': 'Welcome to the Movie Recommendation API. Use /api/movies or /api/recommend.'})

def recommend(movie):
    try:
        index = movies[movies['title'] == movie].index[0]
        distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
        recommended_movies = [movies.iloc[i[0]].title for i in distances[1:6]]
        return recommended_movies
    except IndexError:
        return []

@app.route('/api/recommend', methods=['GET'])
def get_recommendations():
    movie = request.args.get('movie')
    if not movie:
        return jsonify({'error': 'Movie title is required'}), 400
    recommendations = recommend(movie)
    if not recommendations:
        return jsonify({'error': 'Movie not found'}), 404
    return jsonify({'recommendations': recommendations})

@app.route('/api/movies', methods=['GET'])
def get_movies():
    movie_list = movies['title'].tolist()
    return jsonify({'movies': movie_list})

if __name__ == '__main__':
    app.run(debug=True, port=5000)