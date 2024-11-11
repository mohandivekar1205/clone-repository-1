import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  return (
    <>

      <div className='flex justify-center items-center font-semibold gap-4'>
        <div className='m-3'>
          <img src={assets.spotify_logo} className='w-8 items-center sm:block hidden'  />
        </div>



        <div className="flex flex-1 justify-end gap-4 items-center">
          <div className="bg-[#343434] text-white p-3 rounded-full sm:block hidden">
            <img onClick={() => navigate('/')} src={assets.home_icon} className="w-7 rounded cursor-pointer" />
          </div>

          <div className="flex items-center bg-[#343434] text-white p-2 rounded-full w-full sm:1/3 sm:w-1/2 md:w-1/3 lg:w-1.5/5">
            <img src={assets.search_icon} className="w-7" />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="bg-[#343434] focus:outline-none ml-1 flex-grow p-1"
            />
          </div>

          <button className="hidden md:inline-block px-4 py-1 font-semibold text-black bg-white rounded-full hover:bg-gray-600">
            Explore Premium
          </button>
          <button className="hidden md:inline-block px-4 py-1 font-semibold text-white  rounded-full">
            Install App
          </button>

          <div className='m-2'>
          <img src={assets.bell_icon} className='w-4 items-center' />
        </div>

          <div className="relative w-8 h-8 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
            <img src={assets.profile_pic} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>

    </>
  )
}

export default Navbar