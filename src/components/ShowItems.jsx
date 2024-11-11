import React from 'react'

import { useNavigate } from 'react-router-dom'


export const ShowItems = ({image,name,desc,id}) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/podcast/${id}`)}  className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] overflow-hidden'>
    <img className='rounded' src={image} alt='alter image'/>
    <p className='font-bold m-2 mb-1'>{name}</p>
    <p className='text-slate-200 text-sm'>{desc}</p>
</div>
  )
}
