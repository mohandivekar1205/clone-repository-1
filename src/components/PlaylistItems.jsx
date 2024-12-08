import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'


function PlaylistItems ({ image, name, desc, id }) {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/playlist/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] overflow-hidden relative  overflow-hidden group'>
      <img className='rounded w-22 h-22' src={image} alt='alter image' />
      <Button />
      <p className='font-bold m-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default PlaylistItems