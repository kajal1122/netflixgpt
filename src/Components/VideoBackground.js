import React from 'react'
import useVideoTrailer from '../hooks/useVideoTrailer'
import { useSelector } from 'react-redux'
const VideoBackground = (movieId) => {
    //console.log(movieId);
    useVideoTrailer(movieId);
    const movieTrailerDetails = useSelector(state=>state.movies.movieTrailer);
    if(movieTrailerDetails === null)return;
    const movieKey = movieTrailerDetails.key;
    console.log(movieKey);
    console.log(`https://www.youtube.com/embed/${movieKey}si=JCe0CFvYSmDa__Yp`)

  return (
    <div className=" w-screen">
      {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movieKey}si=JCe0CFvYSmDa__Yp`} title="YouTube video player" ></iframe> */}
      {/* <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+movieKey+"?autoplay=1&mute=1&rel=0&enablejsapi=1"} 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+movieKey+"?autoplay=1&mute=1&rel=0&enablejsapi=1"} title='movie_trailer' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground