import React from 'react';
   import MovieCard from './MovieCard';

   function MovieRow({ title, movies }) {
     return (
       <div className="py-4">
         <h2 className="text-2xl font-bold mb-4 px-4">{title}</h2>
         <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
           {movies.map((movie, index) => (
             <MovieCard key={index} title={movie} />
           ))}
         </div>
       </div>
     );
   }

   export default MovieRow;