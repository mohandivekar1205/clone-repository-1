import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContex'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';


function DisplayArtist(){
  return (
    <div className='mt-10 flex gap-10 flex-col md:flex-cols'>
    
   
      <div className="flex flex-col md:flex-row md:items-end gap-10">
        <img className="w-48 rounded" src="" alt="" />
        <div className="flex flex-col">
          <p>Verified Artist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">Arijit Singh</h2>
          <p className="m-1 flex gap-2">
            <h5>Likes 1,323,154</h5>
            <h5>Monthly listener</h5>
          </p>
        </div>
      </div>

   
      <div className='grid'>
      <h1 className='my-4 font-bold text-2xl'>Popular</h1>
        {songsData.map((item, index) => (
          <div key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center">
            <p className="flex text-white">
              <b className="mr-5 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-11 mr-5" src={item.image} alt="" />
              {item.name}
            </p>
            <p className="text-[15px]">{albumsData.name}</p>
            <p className="text-[15px] hidden sm:block">5 Days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
      </div>
</div>
  );
};

export default DisplayArtist