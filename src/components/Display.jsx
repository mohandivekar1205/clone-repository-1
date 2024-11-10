import React from 'react'
import { Route,Routes } from "react-router-dom";
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import DisplayArtist from './DisplayArtist';
import DisplayPlaylist from './DisplayPlaylist';
import DisplayPodcast from './DisplayPodcast';

function Display() {
  return (
    <div className='w-[100%]  flex-grow m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
            <Route path='/artist/:id' element={<DisplayArtist/>}/>
            <Route path='/playlist/:id' element={<DisplayPlaylist/>}/>
            <Route path='/podcast/:id' element={<DisplayPodcast/>}/>
        </Routes>
    </div>
  )
}

export default Display