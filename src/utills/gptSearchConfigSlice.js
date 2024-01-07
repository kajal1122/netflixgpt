import { createSlice } from "@reduxjs/toolkit";


const gptSearchConfigSlice = createSlice({
    name:"GPTSearch",
    initialState:{
        gptSearch:false,
        languageConfig : 'en'
        
    },
    reducers:{
        showGPTsearch : (state)=>{
            state.gptSearch = !state.gptSearch
        },
        setLanguageConfig : (state,action)=>{
            state.languageConfig = action.payload
        }
    }
})


export const {showGPTsearch, setLanguageConfig} = gptSearchConfigSlice.actions
export default gptSearchConfigSlice.reducer;
