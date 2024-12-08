import bell_icon from './icons/bell.png'
import home_icon from './icons/home.png'
import like_icon from './icons/like.png'
import loop_icon from './icons/loop.png'
import mic_icon from './icons/mic.png'
import next_icon from './icons/next.png'
import play_icon from './icons/play.png'
import pause_icon from './icons/pause.png'
import plays_icon from './icons/plays.png'
import prev_icon from './icons/prev.png'
import search_icon from './icons/search.png'
import shuffle_icon from './icons/shuffle.png'
import speaker_icon from './icons/speaker.png'
import stack_icon from './icons/stack.png'
import zoom_icon from './icons/zoom.png'
import plus_icon from './icons/plus.png'
import arrow_icon from './icons/arrow.png'
import mini_player_icon from './icons/mini-player.png'
import queue_icon from './icons/queue.png'
import volume_icon from './icons/volume.png'
import arrow_right from './icons/right_arrow.png'
import arrow_left from './icons/left_arrow.png'
import spotify_logo from './icons/spotify_logo.png'
import clock_icon from './icons/clock_icon.png'
  

import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'

import album_image1 from './Dashbord/Album/Image1.jpg'
import album_image2 from './Dashbord/Album/Image2.jpg'
import album_image3 from './Dashbord/Album/Image3.jpg'
import album_image4 from './Dashbord/Album/Image4.jpg'
import album_image5 from './Dashbord/Album/Image5.jpg'
import album_image6 from './Dashbord/Album/Image6.jpg'

import artist_image1 from './Dashbord/Artist/Image1.jpg'
import artist_image2 from './Dashbord/Artist/Image2.jpg'
import artist_image3 from './Dashbord/Artist/Image3.jpg'
import artist_image4 from './Dashbord/Artist/Image4.jpg'
import artist_image5 from './Dashbord/Artist/Image5.jpg'
import artist_image6 from './Dashbord/Artist/Image6.jpg'

import playlist_image1 from './Dashbord/Playlist/img8.jpg'
import playlist_image2 from './Dashbord/Playlist/img9.jpg'
import playlist_image3 from './Dashbord/Playlist/img10.jpg'
import playlist_image4 from './Dashbord/Playlist/img11.jpg'
import playlist_image5 from './Dashbord/Playlist/img15.jpg'
import playlist_image6 from './Dashbord/Playlist/img16.jpg'





export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: playlist_image1,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: album_image2,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: album_image3,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: album_image4,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: album_image5,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: album_image6,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const artistData = [
    {
        id:0,
        name: "Song One",
        image: artist_image1,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        id:1,
        name: "Song Two",
        image: artist_image2,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "Song Three",
        image: artist_image3,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "Song Four",
        image: artist_image4,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    },
    {
        id:4,
        name: "Song Five",
        image: artist_image5,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        id:5,
        name: "Song Six",
        image: artist_image6,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    }
]


export const playlistData = [
    {
        id:1,
        name: "Song Six",
        image: playlist_image1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:2,
        name: "Song Six",
        image: playlist_image1,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    }
]