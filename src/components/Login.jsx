import React, { useState , useRef  } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile, validatePassword} from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG } from '../utils/constants';

const Login = () => {

    const [isSignINForm , setSignInForm]=useState(false);
    const [errorMessage , seterrorMessage]=useState(null);

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    
    const dispatch=useDispatch();



    let message;
    const handleButtonClick = () => {
        
        if (isSignINForm) {
          message = checkValidData(null ,email.current.value, password.current.value, false);
        } else {
          message = checkValidData(name.current.value, email.current.value, password.current.value, true);
        }
        seterrorMessage(message);

        if(message) return;

        if(!isSignINForm)
        {

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
         const user = userCredential.user;
        updateProfile(user , {
            displayName: name.current.value 
          }).then(() => {
            // Profile updated!
            const {uid , email , displayName , photoURL} = auth.currentUser;
            dispatch(addUser({uid :uid , email:email , displayName : displayName , photoURL : photoURL}));
            
          }).catch((error) => {
            seterrorMessage(error.message);
          });



       

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode +"-"+errorMessage);
        // ..
      });
    }

      else  {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-" +errorMessage);
  });

      }
    
    }

  const toggleForm=()=>{
    setSignInForm(!isSignINForm);

}

  return (
    <div className='o'> 
        <Header/>
        <div className='absolute  md:absolute'>
        <img src={BG} className='' alt="bgname"></img>

        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=' absolute p-12  my-36   bg-black  mx-auto right-0 left-0 pb-24 bg-opacity-85 w-3/4  md:w-3/12'>
          <h2 className='font-bold text-3xl py-4 text-white'>{ isSignINForm ? "Sign In" : "Sign Up"}</h2>  
          {!isSignINForm &&(<input ref={name} type="text" placeholder="Name" className='w-full p-4 my-4 bg-[#333] text-[#8c8c8c]'/> )}
        <input ref={email} type="text" placeholder=" Email" className='w-full p-4 my-4 bg-[#333] text-[#8c8c8c]'/>
        <input  ref={password} className='w-full p-4 my-4 bg-buttonbg' placeholder=' Password' type='password' />

        <p className='text-red-700 font-medium '>{errorMessage}</p>
        <button onClick={handleButtonClick} className='pointer mt-4 bg-red-700 p-4 w-full rounded-lg text-white'>{ isSignINForm ? "Sign In" : "Sign Up"} </button>
  


        <p className='py-4 text-color1 cursor-pointer' onClick={toggleForm}>

            {
                isSignINForm ? "New to Netflix? Sign up now."
                 : "Already Registered? Login now."
            }
           

        </p>
        </form>




    </div>
  )
}

export default  Login; 