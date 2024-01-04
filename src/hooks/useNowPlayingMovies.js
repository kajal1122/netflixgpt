import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utills/nowPlayingMovieSlice";
import { API_Options } from "../utills/constants";
import { useEffect } from "react";

const useNowPlayingMovies =  async () =>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_Options);
      const dataJSON = await data.json();
      console.log(dataJSON)
      dispatch(addNowPlayingMovies(dataJSON.results));
    }
    useEffect(()=>{
        getNowPlayingMovies();
        
      },[]);
   
 
};

export default useNowPlayingMovies;