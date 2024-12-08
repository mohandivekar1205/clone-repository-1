import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const ArtistItems = ({ name, image, desc, id }) => {

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/artist/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded-full ' src={image} alt='' />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>Artist</p>
        </div>
    )
}

export default ArtistItems