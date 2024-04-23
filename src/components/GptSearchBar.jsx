import React from 'react'
import lang from '../utils/lamguageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from "../utils/openai";
import { OPENAI_KEY } from '../utils/constants';
import { API_OPTIONS } from '../utils/constants';
import { addgptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {

  const dispatch=useDispatch();

  const langKey=useSelector(store=> store.config.lang)

  const searchText=useRef(null);

  //movie search in TMDB (from GPT)
  const searchMovieTMDB=async (movie) =>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1" , API_OPTIONS ) 
    

    const json=await data.json();
    return json.results;
  
  }


  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an api call to OpenAPI and get movie results
    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query :" +
        searchText.current.value +
        ", only give me names of 5 movies , comma separated like the example result given ahead , Example Result :Don , Golmaal , Sholay , Wake Up Sid , Vikram";

        try {
          const gptResults = await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery }],
              model: 'gpt-3.5-turbo',
              headers: {
                'Authorization': 'Bearer'+ OPENAI_KEY ,
            }
          });


          console.log(gptResults.choices?.[0]?.message?.content);
          const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
      
          //for each movie i will search tmdb api

         const promiseArray= gptMovies.map((movie)=>searchMovieTMDB(movie));
         
         //above data gives me array of promises
         //Promise.all() tales array of promises
         const tmdbResults=await Promise.all(promiseArray);
         console.log(tmdbResults);

         dispatch(addgptMovieResult({movieNames : gptMovies , movieResults :tmdbResults}));



        
          
      } catch (error) {
          console.error("Error occurred while making API call to OpenAI:", error);
          // Handle the error gracefully, display an error message, etc.
      }
      
};


  
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
            <input type="text" ref={searchText} className='p-4 m-4 col-span-9 ' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className='py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-md' onClick={handleGptSearchClick}>{lang[langKey].search}</button>

        </form>


    </div>
  )
}

export default GptSearchBar