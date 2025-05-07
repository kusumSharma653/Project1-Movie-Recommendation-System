import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hero() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const TMDB_API_KEY = 'f8bac125818393a0076394fa32232ec7'; // Replace with your actual TMDB API key
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        page: 1,
      },
    })
      .then(response => {
        const movie = response.data.results[0];
        setFeaturedMovie({
          title: movie.title,
          overview: movie.overview,
          backdrop_path: movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : 'https://via.placeholder.com/1920x500?text=Featured+Movie',
        });
      })
      .catch(error => {
        console.error('Error fetching featured movie:', error);
        setFeaturedMovie({
          title: 'Featured Movie',
          overview: 'Discover the best movies recommended just for you!',
          backdrop_path: 'https://via.placeholder.com/1920x500?text=Featured+Movie',
        });
      });
  }, []);

  if (!featuredMovie) {
    return <div className="relative h-[500px] bg-gray-900"></div>;
  }

  return (
    <div
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${featuredMovie.backdrop_path})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{featuredMovie.title}</h1>
          <p className="text-xl mb-4">{featuredMovie.overview}</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Watch Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;