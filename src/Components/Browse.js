import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const gptSearch = useSelector(state=>state.gptConfig.gptSearch)
 
    return (
    <div className=''>
         <Header/>
          { gptSearch === true ? <GPTSearch/> : <>
          <MainComponent/>
          <SecondaryComponent/>

          </>}
        
         
        
         
    </div>
  )
}

export default Browse