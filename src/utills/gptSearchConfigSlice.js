import { createSlice } from "@reduxjs/toolkit";


const gptSearchConfigSlice = createSlice({
    name:"GPTSearch",
    initialState:{
        gptSearch:false,
        languageConfig : 'en',
        gptSearchResults : null,
        gptSearctResultVideoTrailerKey:null
        
    },
    reducers:{
        showGPTsearch : (state)=>{
            state.gptSearch = !state.gptSearch
        },
        setLanguageConfig : (state,action)=>{
            state.languageConfig = action.payload
        },
        setGPTSearchResults : (state, action)=>{
            state.gptSearchResults = action.payload
        },
        setGPTSearchResultVideoTrailerKey : (state, action)=>{
            state.gptSearctResultVideoTrailerKey = action.payload
        }
    }
})


export const {showGPTsearch, setLanguageConfig, setGPTSearchResults, setGPTSearchResultVideoTrailerKey} = gptSearchConfigSlice.actions
export default gptSearchConfigSlice.reducer;
