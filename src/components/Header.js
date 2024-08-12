import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store)=> store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className='flex justify-between absolute px-40 py-4 bg-gradient-to-b from-black z-10 w-screen'>
        <img 
        className='w-40'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png'
        alt='logo'/>
        {user ? (<div className='flex w-12 h-12 '><img 
        className='w-40'
        src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
        alt='user icon'/>
        <button onClick={handleSignOut} className='text-sm px-4 mx-4 font-bold text-white'>(Sign Out)</button>
        </div>) : null}
        
    </div>
  )
}

export default Header