import React from 'react'
import { useSelector } from 'react-redux'
import { API_Options } from '../utills/gptConstants'
import { useDispatch } from 'react-redux'
import { setGPTSearchResultVideoTrailerKey } from '../utills/gptSearchConfigSlice'


const GPTSearchResultPage = () => {
  const searchedMovieResult = useSelector(state=>state.gptConfig.gptSearchResults);
  const resultMovieKey = useSelector(state=>state.gptConfig.gptSearctResultVideoTrailerKey)
  const dispatch = useDispatch();
  const movieId = searchedMovieResult.id;
  const getMovieTrailerKey = async() =>{
    
    const data =  await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_Options);
    const jsonData = await data.json();
    if(jsonData.results && jsonData.results.length >= 1){
      dispatch(setGPTSearchResultVideoTrailerKey(jsonData.results[0].key));
    }
   }
  
  if(searchedMovieResult){
    getMovieTrailerKey();
    if(resultMovieKey){
      return (
        <div className='flex justify-center absolute z-10'>
               <div className="">
                   <div className='m-2'>
               
                   <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${resultMovieKey}?autoplay&mute=1&rel=0&enablejsapi=1`} title='movie_trailer' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
             </div>
          
         </div>
  
      )

    }
    
  }
  return(
    <div className='flex justify-center absolute z-10'>
            <div className='text-white'>
              We are not able to find the trailer at this moment..please try something else.
           </div>
          </div>
  )


  
  
 
  
}

export default GPTSearchResultPage