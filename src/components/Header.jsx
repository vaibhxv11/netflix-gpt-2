import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { BG, LOGO, pfp } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {

  const dispatch=useDispatch();
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)


    const navigate=useNavigate();
    const user=useSelector(store => store.user);
 
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.

         
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });

    }

   

       // for sign in and sign out
       useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
        
              const {uid , email , displayName , photoURL} = user;
               dispatch(addUser({uid :uid , email:email , displayName : displayName , photoURL : photoURL}));

               navigate("/browse");

              
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/")
             

            }
          });
          //unsubscribe when component unmounts
          return ()=> unsubscribe();
    } , []);

    const handleGPTSearch=()=>{
      //toggle GPT Search button
      dispatch(toggleGptSearchView());

    }

    const handleLanguageChange=(e)=>{
     dispatch(changeLanguage(e.target.value));


    }

  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between ">
     <img className=" w-44" src={LOGO} alt='Logo'></img>
    
    
      {user &&
       (<div className='flex '>

    { showGptSearch && ( <select className=' mt-7 mx-2 h-[34px] bg-gray-900 text-white' onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map((lang)=>(
      <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>

       ))}
    

     </select>)}

        <div className='flex py-2'>
        <button className=' px-4 m-2 py-4 bg-purple-800 text-white rounded-md ' onClick={handleGPTSearch}>{showGptSearch? "Homepage" :"GPT Search"} </button> </div>
        {/* <button className='py-4 px-2 m-4 w-24 h-14 text-center bg-green-800 text-white rounded-md' onClick={}>
          About Us
        </button> */}
        <img className='w-14 h-16 p-2 mt-3' alt="user-icon"
        src={pfp}></img>
        <button onClick={handleSignOut}
        className='text-white font-medium'>Sign Out</button>
        
        </div> )}


    </div>

  )
}

export default Header; 