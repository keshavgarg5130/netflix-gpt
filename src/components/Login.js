import React, { useRef } from 'react'
import { useState } from 'react'
import { auth } from '../utils/firebase';
import Header from './Header'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut,updateProfile} from "firebase/auth";

import { checkValidData } from '../utils/validate'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState(null)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
const handleButtonClick = () => {
  console.log(emailRef.current.value)
  const message = checkValidData(emailRef.current.value, passwordRef.current.value)
  setErrorMessage(message)
  if (message) return;

  //signin and singup process
  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: nameRef.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
  // Profile updated!
  const uid = auth.currentUser.uid;
  const displayName = auth.currentUser.displayName;
  const email = auth.currentUser.email;
  dispatch(addUser({uid : uid, email : email, displayName : displayName}))
  navigate('/browse')
}).catch((error) => {
  navigate('/error')
});
    navigate('/browse')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage((errorCode + '-' + errorMessage))
  });
  }else{
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/browse')
    console.log("you are signed in")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + errorMessage)
  });
  }

  
  
}
const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm)
}
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg'
            alt='bg logo' />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black rounded bg-opacity-70'>
            <h1 className='font-bold text-3xl py-6 my-4 mx-auto'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={nameRef} type='text' placeholder=' Full Name' className='text-sm p-4 my-4 mx-auto w-full rounded-sm bg-black bg-opacity-40 border border-current' />}
            <input ref={emailRef} type='text' placeholder=' Email' className='text-sm p-4 my-4 mx-auto w-full rounded-sm bg-black bg-opacity-40 border border-current' />
            <input ref={passwordRef} type='password' placeholder='Password' className='text-sm p-4 my-4 mx-auto w-full rounded-sm  bg-black bg-opacity-40 border border-current' /> 
            <p className='text-red-500 text-sm font-bold'>{errorMessage}</p>
            <button onClick={handleButtonClick} className='p-2 my-8 mx-auto bg-red-600 w-full rounded-sm'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='text-sm cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now!" : "Already registered? Sign in now!"}</p>
        </form>
    </div>
  )
}

export default Login