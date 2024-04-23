
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRated from '../hooks/useTopRated';
import GptSearch from './GptSearch';
import useUpComingMovies from '../hooks/useUpComingMovies';
 
const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

     
  //custom hook
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpComingMovies();

  return (
    <div>
        <Header/>
        { showGptSearch ?(   <GptSearch/> )
         :( 

          //this is jsx , expression it , takes only one pareent , so more than one add in <>   </>
         <>
         <MainContainer/>
         <SecondaryContainer/>
         </>
         )}
     
       


    </div>
  )
};

export default Browse;