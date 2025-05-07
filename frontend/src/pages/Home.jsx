import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const TMDB_API_KEY = 'f8bac125818393a0076394fa32232ec7'; // Replace with your actual TMDB API key
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
  
  useEffect(() => {
    // Fetch movie list
    axios.get('http://localhost:5000/api/movies')
      .then(response => {
        setMovies(response.data.movies);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleSearch = () => {
    if (!selectedMovie) return;
    setLoading(true);
    axios.get(`http://localhost:5000/api/recommend?movie=${encodeURIComponent(selectedMovie)}`)
      .then(response => {
        setRecommendations(response.data.recommendations);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recommendations:', error);
        setRecommendations([]);
        setLoading(false);
      });
  };

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Find Recommendations</h2>
          <div className="flex space-x-4">
            <select
              className="bg-gray-800 text-white p-2 rounded w-64"
              value={selectedMovie}
              onChange={(e) => setSelectedMovie(e.target.value)}
            >
              <option value="">Select a movie</option>
              {movies.map((movie, index) => (
                <option key={index} value={movie}>{movie}</option>
              ))}
            </select>
            <button
              onClick={handleSearch}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Get Recommendations'}
            </button>
          </div>
        </div>
        {recommendations.length > 0 && (
          <MovieRow title="Recommended Movies" movies={recommendations} />
        )}
      </div>
    </div>
  );
}

export default Home;