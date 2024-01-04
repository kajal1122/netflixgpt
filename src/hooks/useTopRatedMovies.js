import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utills/nowPlayingMovieSlice";
import { API_Options } from "../utills/constants";
import { useEffect } from "react";

const useTopRatedMovies =  async () =>{
    const dispatch = useDispatch();

    const getTopRatedMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_Options);
      const dataJSON = await data.json();
      console.log(dataJSON)
      dispatch(addTopRatedMovies(dataJSON.results));
    }
    useEffect(()=>{
        getTopRatedMovies();
        
      },[]);
   
 
};

export default useTopRatedMovies;