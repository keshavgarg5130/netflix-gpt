import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {addUser,removeUser} from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch();
    
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              const displayName = user.displayName;
              const email = user.email;
              dispatch(addUser({uid : uid, email : email, displayName : displayName}))
              
             
            } else {
              dispatch(removeUser())
              
            }
          });
    },[])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body