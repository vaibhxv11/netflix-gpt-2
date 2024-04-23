import React from 'react'
import { useSelector } from 'react-redux'
import gptSlice from '../utils/gptSlice';
import MoviesList from './MoviesList';


const GptMovieSuggestions = () => {

  const gpt=useSelector(store=>store.gpt);
  const {movieNames , movieResults}=gpt;

  if(!movieNames) return null;



  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {movieNames.map((movieName , index) =>(
          <MoviesList 
          key={movieName}
          title ={movieName}
          movies={movieResults[index]}
          />

        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions