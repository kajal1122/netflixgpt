import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
 
    return (
    <div className=''>
         <Header/>
         <MainComponent/>
        
         
         <SecondaryComponent/>
         
    </div>
  )
}

export default Browse