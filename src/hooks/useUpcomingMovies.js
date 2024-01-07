import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utills/nowPlayingMovieSlice";
import { API_Options } from "../utills/gptConstants";
import { useEffect } from "react";

const useUpcomingMovies =  async () =>{
    const dispatch = useDispatch();

    const getUpcomingMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_Options);
      const dataJSON = await data.json();
      console.log(dataJSON)
      dispatch(addUpcomingMovies(dataJSON.results));
    }
    useEffect(()=>{
        getUpcomingMovies();
        
      },[]);
   
 
};

export default useUpcomingMovies;