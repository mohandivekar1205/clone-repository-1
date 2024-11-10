import React from 'react'
import { albumsData } from '../assets/assets'
import AlbumItem from './Albumitem'

import { songsData } from '../assets/assets'
import SongItem from './SongItem'
import ArtistItems from './ArtistItems'
import { ShowItems } from './ShowItems'
import DisplayArtist from './DisplayArtist'
import PlaylistItems from './PlaylistItems'
import { PodcastItem } from './PodcastItem'

function DisplayHome() {
    return (
        <div>

            <div className='flex items-center gap-2'>
                <p className='bg-[#343434] text-white px-3 py-1 rounded-2xl cursor-pointer font-semibold'>All</p>
                <p className='bg-[#343434] text-white px-3 py-1 rounded-2xl cursor-pointer font-semibold'>Music</p>
                <p className='bg-[#343434] text-white px-3 py-1 rounded-2xl cursor-pointer font-semibold'>Podcasts</p>
            </div>

            <div className='mb-4'>
                <h1 className='my-4 font-bold text-2xl'>Feature Chart</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) =>
                        (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>

            {/* <div className='mb-4'>
                <h1 className='my-4 font-bold text-2xl'>Today's Biggest hits</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) =>
                        (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div> */}

            <div className='mb-4'>
                <h1 className='my-4 font-bold text-2xl'>Your Favorite Artist</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) =>
                        (<ArtistItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>

            <div className='mb-4'>
                <h1 className='my-4 font-bold text-2xl'>Episode For You</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) =>
                        (<PlaylistItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>

            <div className='mb-4'>
                <h1 className='my-4 font-bold text-2xl'>Episode For You</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) =>
                        (<PodcastItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
        </div>
    )
}

export default DisplayHome