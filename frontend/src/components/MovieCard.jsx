import React from 'react';

   function MovieCard({ title }) {
     return (
       <div className="relative w-48 h-72 bg-gray-800 rounded overflow-hidden transform transition duration-300 hover:scale-105">
         <img
           src={`https://via.placeholder.com/200x300?text=${encodeURIComponent(title)}`}
           alt={title}
           className="w-full h-full object-cover"
         />
         <div className="absolute bottom-0 w-full bg-black bg-opacity-75 p-2">
           <h3 className="text-white text-sm font-semibold">{title}</h3>
         </div>
       </div>
     );
   }

   export default MovieCard;

