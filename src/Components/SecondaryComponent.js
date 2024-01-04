import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const SecondaryComponent = () => {

  const nowPlayingMovies = useSelector(state=>state.movies.nowPlayingMovies)
  const popularMovies = useSelector(state=> state.movies.popularMovies)
  const topRatedMovies = useSelector(state=>state.movies.topRatedMovies)
  const upComingMovies = useSelector(state=>state.movies.upcomingMovies)
  return (
    nowPlayingMovies  && popularMovies && upComingMovies &&
      (<div className='bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
         <MovieList title="Now Playing" movieList={nowPlayingMovies} />
         <MovieList title="Popular " movieList={popularMovies} />
         <MovieList title="Top Rated" movieList={topRatedMovies} />
         <MovieList title="Upcoming" movieList={upComingMovies} />

      </div>
    </div>
    )
    
    
  )
}

export default SecondaryComponent