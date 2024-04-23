import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name :"movies" ,
    initialState:{
        nowPlayingMovies :null,
        popularMovies :null ,
        trailerVideo:null ,
        topratedmovies:null,
        upcomingmovies:null
    } ,
    reducers :{
        addNowPlayingMovies:(state , action) =>{
            state.nowPlayingMovies=action.payload;
        } ,
        addPopularMovies:(state , action) =>{
            state.popularMovies=action.payload;
        } ,
        addTrailerVideo:(state , action)=>{
           state.trailerVideo=action.payload;
        } ,
        addTopRatedMovies:(state,action)=>{
            state.topratedmovies=action.payload;
         },
         addUpComingMovies:(state,action)=>{
            state.upcomingmovies=action.payload;
         },
    }
})

export const {addNowPlayingMovies , addTrailerVideo , addPopularMovies , addTopRatedMovies ,addUpComingMovies }=moviesSlice.actions;
export default moviesSlice.reducer;