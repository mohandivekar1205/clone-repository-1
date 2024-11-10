import React, { useState } from 'react'
import { assets } from '../assets/assets'


function Loginpage() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#121212] p-8 rounded-lg shadow-lg w-96">

        <div className='flex justify-center m-2'>
        <img src={assets.spotify_logo} className='w-12'/>
        </div>

        <h2 className="text-4xl font-bold text-center mb-6 text-white">Login to spotify</h2>

        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          <div className="mb-6 relative">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none  items-center"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 mt-6 right-3 flex items-center text-black"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1ED760] text-white font-bold py-2 px-4 rounded-full  transition duration-300"
          >
            Login
          </button>
        </form>
        
        <div className='mt-4 text-center'>
            <h4 
            typeof='button'
             className='block text-white text-sm mb-2'>Forgot your password?</h4>
        </div>

        <div className='mt-4 text-center'>
            <h4 className='block text-white text-sm mb-2'>Don't have an account?Sign up for Spotify</h4>
        </div>
      </div>
    </div>
  )
}

export default Loginpage