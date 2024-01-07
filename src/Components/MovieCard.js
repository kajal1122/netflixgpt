import React from 'react'
import {posterImgPath} from '../utills/gptConstants'
const MovieCard = ({movieInfo}) => {
  return (
    <div className="w-36 md:w-48 pr-4">
        <img src={posterImgPath+movieInfo.poster_path} alt="movie_poster"/>
    </div>
  )
}

export default MovieCard