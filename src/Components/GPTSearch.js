import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import { netFlixBGImg } from '../utills/gptConstants';
const GPTSearch = () => {
  return (
    <div>
         <div className="absolute w-full -z-20">
                <img
                src={netFlixBGImg}
                alt="netflix-bg-img"
                />
            </div>
        <GPTSearchBar />
        {/* <GPTSearchResultPage /> */}
    </div>
  )
}

export default GPTSearch;