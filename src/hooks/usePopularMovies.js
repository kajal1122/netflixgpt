import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utills/nowPlayingMovieSlice";
import { API_Options } from "../utills/constants";
import { useEffect } from "react";

const usePopularMovies =  async () =>{
    const dispatch = useDispatch();

    const getPopularMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Options);
      const dataJSON = await data.json();
      console.log(dataJSON)
      dispatch(addPopularMovies(dataJSON.results));
    }
    useEffect(()=>{
        getPopularMovies();
        
      },[]);
   
 
};

export default usePopularMovies;