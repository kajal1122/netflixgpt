import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTSearchResultPage from './GPTSearchResultPage';
import { netFlixBGImg } from '../utills/gptConstants';
import { useSelector } from 'react-redux';
const GPTSearch = () => {
  const searchedMovieResult = useSelector(state=>state.gptConfig.gptSearchResults);
  return (
    <div>
         <div className="absolute w-full -z-20">
                <img
                src={netFlixBGImg}
                alt="netflix-bg-img"
                />
            </div>
        <GPTSearchBar />
        {searchedMovieResult === null ? <></> : <GPTSearchResultPage />}
        
    </div>
  )
}

export default GPTSearch;