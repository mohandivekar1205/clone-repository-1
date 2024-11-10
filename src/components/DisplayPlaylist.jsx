import React from 'react'

import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContex';

const DisplayPlaylist = () => {
  return (
    <div> 
      <div className='mt-10 flex gap-10 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumsData.image} alt=''/>
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>Bollywood & Chill</h2>
                <h4>Sit back, and chill with bollywood's easygoing hits</h4>
                <p className='m-1 flex gap-2'>
                <img className='inline-block w-5 m-1' src={assets.spotify_logo} alt=''/>
                    <h5 className='bold'>Spotify</h5>
                    <h5>306,837 saves </h5>
                    <h5>75 Songs</h5>
                    <h5>About 2 hr 30 min</h5>
                </p>
            </div>
        </div>
        <div className='grid gride-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Albums</p>
            <p className='hidden sm:block'>Data Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt=''/>
        </div>
        <hr/>
        {songsData.map((item,index) =>(
            <div  key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center'>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt=''/>{item.name}
                </p>
                <p className='text-[15px]'>{albumsData.name}</p>
                <p className='text-[15px] hidden sm:block'>5 Days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>

            </div>
        ))}  
    </div>
  )
}

export default DisplayPlaylist