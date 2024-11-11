import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import data from '../assets/data.js'




function Sidebar() {

  const navigate = useNavigate();

  const [selectedArray, setSelectedArray] = useState();

  const [activeButton, setActiveButton] = useState(null);

  const buttonData = [
    { label: 'Playlists', array: 'playlists' },
    { label: 'Albums', array: 'favoritealbum' },
    { label: 'Artist', array: 'followedArtists' },
    { label: 'Podcasts', array: 'favoriteshows' }
  ];

  const handleButtonClick = (index, arrayName) => {
    setActiveButton(index);
    setSelectedArray(arrayName);
  };

  const renderList = () => {

    switch (selectedArray) {
      case 'playlists':
        return data.map(list =>
          list.playlists.map(playlist => (
            <li key={playlist.id}>
              <div className='flex items-center hover:bg-[#ffffff26] rounded'>
                <img className='w-12 h-12 rounded ml-2' src={playlist.image} />
                <div className='d-flex items-center p-2'>
                  <h3 className='font-semibold'>{playlist.name}</h3>
                  <p className='text-slate-200 text-sm '>{playlist.description}</p>
                </div>
              </div>
            </li>
          ))
        );
      case 'followedArtists':
        return data.map(list =>
          list.followedArtists.map(artist => (
            <li onClick={() => navigate(`/artist/${artist.id}`)} key={artist.id}>
              <div className='flex items-center hover:bg-[#ffffff26] rounded p-3'>
                <img className='w-12 h-12 rounded-full object-cover ml-2' src={artist.image} />
                <div className='d-flex items-center p-3'>
                  <h3 className='font-semibold'>{artist.name}</h3>
                  {/* <p className='text-slate-200 text-sm'></p> */}
                </div>
              </div>
            </li>
          ))
        )
      case 'favoriteTracks':
        return data.map(list =>
          list.favoriteTracks.map(track => (
            <li key={track.id}>
              <div className='flex items-center hover:bg-[#ffffff26] rounded'>
                <img className='w-12 h-12 rounded ml-2' src={track.image} />
                <div className='d-flex items-center p-3'>
                  <h3 className=' font-semibold'>{track.title}</h3>
                  <p className='text-slate-200 text-sm'>{track.description}</p>
                </div>
              </div>
            </li>
          ))
        )
      case 'favoriteshows':
        return data.map(list =>
          list.favoriteshows.map(show => (
            <li onClick={() => navigate(`/podcast/${show.id}`)} key={show.id}>
              <div className='flex p-1 items-center hover:bg-[#ffffff26] rounded'>
                <img className='w-11 h-11 rounded' src={show.image} />
                <div className='d-flex '>
                  <h3 className='m-2 font-semibold'>{show.title}</h3>
                  {/* <p className='m-1'>{show.description}</p> */}
                </div>
              </div>
            </li>
          ))
        );
      case 'favoritealbum':
        return data.map(list =>
          list.favoritealbum.map(album => (
            <li key={album.id}>
              <div className='flex p-1 items-center hover:bg-[#ffffff26] rounded'>
                <img className='w-12 h-12 rounded ml-2' src={album.image} />
                <div className='d-flex items-center p-2'>
                  <h3 className='font-semibold'>{album.name}</h3>
                  <p className='text-slate-200 text-sm'>{album.artist}</p>
                </div>
              </div>
            </li>
          ))
        );
      default:
        return null;
    }
  };

  return (
    <div className='w-[25%] h-full m-2 flex-col gap-2 text-white hidden lg:flex'>

      <div className='bg-[#121212] h-full rounded p-2'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-6' src={assets.stack_icon} alt="stack-icon" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.plus_icon} alt="arrow-icon" />
            {/* <img className='w-5' src={assets.arrow_icon} alt="play-icon" /> */}
          </div>
        </div>

        <div className='flex items-center gap-0 overflow-x-auto'>
          {buttonData.map((button, index) => (
            <p
              key={index}
              onClick={() => handleButtonClick(index, button.array)}
              className={`px-3 py-1 rounded-3xl cursor-pointer font-semibold m-1 ${activeButton === index ? 'bg-white text-black' : 'bg-[#343434] text-white'
                }`}
            >{button.label}
            </p>
          ))}
        </div>
        <div className='overflow-y-auto h-full p-3'>
          <ul>{renderList()}</ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar