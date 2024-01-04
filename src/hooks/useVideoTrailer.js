import { useEffect } from "react";
import { API_Options } from "../utills/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utills/nowPlayingMovieSlice";
const useVideoTrailer = ({movieId})=>{
      const dispatch = useDispatch();
      const getVideoTrailer = async()=>{
            const data =  await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_Options);
            const jsonData = await data.json();
            console.log('trailer',jsonData);
            let movieTrailer = jsonData.results.filter(data => data.type === 'Trailer');
            movieTrailer= movieTrailer.length === 0 ? jsonData[0] : movieTrailer[0];
            console.log(movieTrailer)
            dispatch(addMovieTrailer(movieTrailer));


      }
      useEffect(()=>{
        getVideoTrailer();
      },[])
     

}

export default useVideoTrailer;