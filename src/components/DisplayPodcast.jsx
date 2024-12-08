import React from 'react'
import { PlayerContext } from '../context/PlayerContex'
import { useParams } from 'react-router-dom'
import { albumsData, assets, artistData } from '../assets/assets';

const DisplayPodcast = () => {
  return (
    <div> 
      <div className='mt-10 flex gap-10 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumsData.image} alt=''/>
            <div className='flex flex-col'>
                <p>Podcast</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>Nitish Rajput Podcast</h2>
                <p className='text-2xl font-bold '>Team Nitish Rajput</p>
            </div>
        </div>

        <p className='text-2xl font-bold m-2'>All Episodes</p>        
        
        <div className='flex items-center p-5 hover:bg-[#ffffff26] rounded'>
        <img className='w-20 h-20 rounded' src={albumsData.image} alt=''/>
          <di className='grid m-3'>
            <h4  className='font-bold'>India-china dispute explain</h4>
            <p>Nitish Rajput Podcast</p>
            <p>Sep 19 39 min 45 sec</p>
          </di>
        </div>
    </div>
  )
}

export default DisplayPodcast