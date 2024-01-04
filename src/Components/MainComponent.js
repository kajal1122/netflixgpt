import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainComponent = () => {
    const movieList = useSelector(state=>state.movies.nowPlayingMovies);
    if(movieList===null)return;
    const {original_title, overview, id} = movieList[0];
   
  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle original_title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>

    </div>
  )
}

export default MainComponent