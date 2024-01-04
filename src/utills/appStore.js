import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users';
import movieReducer from './nowPlayingMovieSlice'
const userStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer
    }
})

export default userStore;