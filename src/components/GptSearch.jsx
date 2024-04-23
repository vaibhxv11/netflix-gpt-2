import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG } from '../utils/constants';
const GptSearch = () => {
  return (
    <div>
       <div className='fixed -z-10'>
        <img src={BG} ></img>

        </div>
    <GptSearchBar/>
    <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;