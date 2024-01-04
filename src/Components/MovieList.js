import React from 'react'
import MovieCard from './MovieCard';
const MovieList = ({title, movieList}) => {
    console.log(title);
    //console.log(movieList.length);
  return (
    <div className='px-6'>
         <h2 className='text-lg md:text-2xl py-4 text-white font-bold'>{title}</h2>
        <div className='flex overflow-x-scroll'>
           
            <div className='flex'>
                {movieList.map(movie => <MovieCard key={movie.id} movieInfo={movie}/>)}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList