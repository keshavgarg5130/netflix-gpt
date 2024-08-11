import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg'
            alt='bg logo' />
        </div>
        <form className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black rounded bg-opacity-70'>
            <h1 className='font-bold text-3xl py-6 my-4 mx-auto'>Sign In</h1>
            <input type='text' placeholder=' Email' className='text-sm p-4 my-4 mx-auto w-full rounded-sm bg-black bg-opacity-40 border border-current' />
            <input type='password' placeholder='Password' className='text-sm p-4 my-4 mx-auto w-full rounded-sm  bg-black bg-opacity-40 border border-current' /> 
            <button className='p-2 my-8 mx-auto bg-red-600 w-full rounded-sm'>Sign In</button>
            <p className='text-sm'>New to Netflix? <a>Sign up now</a></p>
        </form>
    </div>
  )
}

export default Login