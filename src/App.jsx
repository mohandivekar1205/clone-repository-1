import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import {PlayerContext} from './context/PlayerContex.jsx'

import Navbar from './components/Navbar.jsx'

function App() {

const {audioRef,track} = useContext(PlayerContext)

  return (
   <div className='h-screen bg-black flex flex-col overflow-hidden'>
    
    {/* <RegistrationPage/>
    <Loginpage/>
     */}
     <Navbar/>
    <div className='h-[77%] flex'>
    <Sidebar/>
    <Display/>
    </div>
    <Player/>
    <audio preload='auto' src={track.file} ref={audioRef}></audio>
   </div>
  )
}

export default App
