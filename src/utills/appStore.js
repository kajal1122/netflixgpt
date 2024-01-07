import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users';
import movieReducer from './nowPlayingMovieSlice'
import gptSlicer from './gptSearchConfigSlice'
const userStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gptConfig:gptSlicer
    }
})

export default userStore;