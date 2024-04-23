import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name :'gpt' ,
    initialState :{
        showGptSearch :false ,
        movieResults : null ,
        movieNames : null ,
    },
    reducers :{
        toggleGptSearchView:(state , action)=>{
            state.showGptSearch =!state.showGptSearch;  
        } ,
        addgptMovieResult :(state , action)=>{
            const {movieNames , movieResults}=action.payload;
            state.movieNames=action.payload;
            state.movieResults=action.payload ;
        } ,

    }
})

export const {toggleGptSearchView , addgptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;