import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'

import image1 from '../assets/Popular playlist/image1.jpg'
import image2 from '../assets/Popular playlist/image2.jpg'
import image3 from '../assets/Popular playlist/image3.jpg'
import image4 from '../assets/Popular playlist/image4.jpg'
import image5 from '../assets/Popular playlist/images5.jfif'
import image6 from '../assets/Popular playlist/image6.jfif'
import image7 from '../assets/Popular playlist/image7.jfif'
import image8 from '../assets/Popular playlist/image8.jfif'
import image9 from '../assets/Popular playlist/image9.jfif'
import image10 from '../assets/Popular playlist/image10.jfif'
import image11 from '../assets/Popular playlist/image11.jfif'
import image12 from '../assets/Popular playlist/image12.jfif'

import image13 from '../assets/Popular artist/image1.jfif'
import image14 from '../assets/Popular artist/image2.jfif'
import image15 from '../assets/Popular artist/image3.jfif'
import image16 from '../assets/Popular artist/image4.jfif'
import image17 from '../assets/Popular artist/image5.jfif'
import image18 from '../assets/Popular artist/image6.jfif'
import image19 from '../assets/Popular artist/image7.jfif'
import image20 from '../assets/Popular artist/image8.jfif'
import image21 from '../assets/Popular artist/image9.jfif'
import image22 from '../assets/Popular artist/image10.jfif'


import image23 from '../assets/Popular album/image1.jfif'
import image24 from '../assets/Popular album/image2.jfif'
import image25 from '../assets/Popular album/image3.jfif'
import image26 from '../assets/Popular album/image4.jfif'
import image27 from '../assets/Popular album/image5.jfif'
import image28 from '../assets/Popular album/image6.jfif'
import image29 from '../assets/Popular album/image7.jfif'
import image30 from '../assets/Popular album/image8.jfif'
import image31 from '../assets/Popular album/image9.jfif'
import image32 from '../assets/Popular album/image10.jfif'


const data = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "gender": "Male",
        "dob": "1990-05-20",
        "country": "USA",
        "profile_pic": "image",
        "username": "johndoe",
        "password": "hashed_password",
        "created_by": "system",
        "created_on": "2023-01-01",
        "modify_on": "2023-07-01",
        "modify_by": "admin",
            "playlists": [
                {
                    "id": 1,
                    "name": "Bollywood Hits",
                    "image": image5,
                    "title": "Bollywood Hits Collection",
                    "description": "Best of Bollywood music.",
                    "created_by": "John Doe",
                    "created_on": "2023-06-10",
                    "modify_on": "2023-06-15",
                    "modify_by": "admin",
                    "saved_count": 120,
                    "track_count": 3,
                    "duration": 675,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 2,
                            "image": "img2",
                            "artist": "Arijit Singh",
                            "title": "Rhythm of the Night",
                            "duration": 180
                        },
                        {
                            "id": 4,
                            "image": "img3",
                            "artist": "Arijit Singh",
                            "title": "Harmony of Dreams",
                            "duration": 195
                        },
                        {
                            "id": 5,
                            "image": "img4",
                            "artist": "Arijit Singh",
                            "title": "Echoes of Time",
                            "duration": 300
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Sid Sriram Melodies",
                    "image": image1,
                    "title": "Soulful Melodies by Sid Sriram",
                    "description": "Sid Sriram's most popular songs.",
                    "created_by": "Jane Doe",
                    "created_on": "2023-04-12",
                    "modify_on": "2023-04-18",
                    "modify_by": "admin",
                    "saved_count": 80,
                    "track_count": 3,
                    "duration": 640,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 6,
                            "image": "img6",
                            "artist": "Sid Sriram",  
                            "title": "Soul's Echo",
                            "duration": 200
                        },
                        {
                            "id": 7,
                            "image": "img7",
                            "artist": "Sid Sriram",
                            "title": "Whispers of Love",
                            "duration": 220
                        },
                        {
                            "id": 8,
                            "image": "img8",
                            "artist": "Sid Sriram",
                            "title": "Serenade of the Stars",
                            "duration": 220
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Shaktisree Gopalan Vibes",
                    "image": image2,
                    "title": "Best of Shaktisree Gopalan",
                    "description": "Unique voice of Shaktisree Gopalan.",
                    "created_by": "Admin",
                    "created_on": "2023-07-01",
                    "modify_on": "2023-07-05",
                    "modify_by": "admin",
                    "saved_count": 90,
                    "track_count": 3,
                    "duration": 715,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 9,
                            "image": "img10",
                            "artist": "Shaktisree Gopalan",
                            "title": "Mystic Waters",
                            "duration": 235
                        },
                        {
                            "id": 10,
                            "image": "img11",
                            "artist": "Shaktisree Gopalan",
                            "title": "Echo of Bliss",
                            "duration": 240
                        },
                        {
                            "id": 11,
                            "image": "img12",
                            "artist": "Shaktisree Gopalan",
                            "title": "Waves of Harmony",
                            "duration": 240
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "Jul's Hits",
                    "image": image4,
                    "title": "Top Tracks by Jul",
                    "description": "A collection of the best tracks by Jul.",
                    "created_by": "System",
                    "created_on": "2023-05-22",
                    "modify_on": "2023-05-29",
                    "modify_by": "admin",
                    "saved_count": 110,
                    "track_count": 3,
                    "duration": 620,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 12,
                            "image": "img14",
                            "artist": "Jul",
                            "title": "Sunset Boulevard",
                            "duration": 210
                        },
                        {
                            "id": 13,
                            "image": "img15",
                            "artist": "Jul",
                            "title": "City Lights",
                            "duration": 210
                        },
                        {
                            "id": 14,
                            "image": "img16",
                            "artist": "Jul",
                            "title": "Midnight Dreams",
                            "duration": 200
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "Amit Trivedi Tunes",
                    "image": image10,
                    "title": "Amit Trivedi's Best Compositions",
                    "description": "An eclectic mix of Amit Trivedi's hits.",
                    "created_by": "Editor",
                    "created_on": "2023-03-10",
                    "modify_on": "2023-03-20",
                    "modify_by": "admin",
                    "saved_count": 150,
                    "track_count": 3,
                    "duration": 720,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 15,
                            "image": "img18",
                            "artist": "Amit Trivedi",
                            "title": "Rustic Rhapsody",
                            "duration": 240
                        },
                        {
                            "id": 16,
                            "image": "img19",
                            "artist": "Amit Trivedi",
                            "title": "Echoes of Nature",
                            "duration": 250
                        },
                        {
                            "id": 17,
                            "image": "img20",
                            "artist": "Amit Trivedi",
                            "title": "Melodies of the Heart",
                            "duration": 230
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "Atif Aslam Hits",
                    "image": image11,
                    "title": "Iconic Songs by Atif Aslam",
                    "description": "Best of Atif Aslam's music.",
                    "created_by": "Admin",
                    "created_on": "2023-02-25",
                    "modify_on": "2023-03-05",
                    "modify_by": "admin",
                    "saved_count": 200,
                    "track_count": 3,
                    "duration": 640,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 18,
                            "image": "img22",
                            "artist": "Atif Aslam",
                            "title": "Ocean of Love",
                            "duration": 220
                        },
                        {
                            "id": 19,
                            "image": "img23",
                            "artist": "Atif Aslam",
                            "title": "Desert Wind",
                            "duration": 210
                        },
                        {
                            "id": 20,
                            "image": "img24",
                            "artist": "Atif Aslam",
                            "title": "Echoes of the Soul",
                            "duration": 210
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "Pritam's Bollywood Classics",
                    "image": image9,
                    "title": "Bollywood Classics by Pritam",
                    "description": "classic tracks by Pritam.",
                    "created_by": "John Smith",
                    "created_on": "2023-01-15",
                    "modify_on": "2023-01-20",
                    "modify_by": "admin",
                    "saved_count": 130,
                    "track_count": 3,
                    "duration": 710,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 21,
                            "image": "img26",
                            "artist": "Pritam",
                            "title": "Bollywood Dreams",
                            "duration": 240
                        },
                        {
                            "id": 22,
                            "image": "img27",
                            "artist": "Pritam",
                            "title": "City of Lights",
                            "duration": 230
                        },
                        {
                            "id": 23,
                            "image": "img28",
                            "artist": "Pritam",
                            "title": "Journey of Love",
                            "duration": 240
                        }
                    ]
                },{
                    "id": 8,
                    "name": "Hell's Best Tracks",
                    "image": image6,
                    "title": "Top Hits by Hell",
                    "description": "Dark and intense tracks by Hell.",
                    "created_by": "Music Team",
                    "created_on": "2023-06-05",
                    "modify_on": "2023-06-12",
                    "modify_by": "admin",
                    "saved_count": 95,
                    "track_count": 3,
                    "duration": 670,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 24,
                            "image": "img30",
                            "artist": "Hell",
                            "title": "Inferno Rising",
                            "duration": 220
                        },
                        {
                            "id": 25,
                            "image": "img31",
                            "artist": "Hell",
                            "title": "Darkest Dawn",
                            "duration": 225
                        },
                        {
                            "id": 26,
                            "image": "img32",
                            "artist": "Hell",
                            "title": "Echoes of Fire",
                            "duration": 225
                        }
                    ]
                },
                {
                    "id": 9,
                    "name": "Balkar Ankhila Hits",
                    "image": image5,
                    "title": "Energetic Punjabi Beats",
                    "description": "Popular tracks by Balkar Ankhila.",
                    "created_by": "DJ Mix",
                    "created_on": "2023-05-12",
                    "modify_on": "2023-05-18",
                    "modify_by": "admin",
                    "saved_count": 105,
                    "track_count": 3,
                    "duration": 645,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 27,
                            "image": "img34",
                            "artist": "Balkar Ankhila",
                            "title": "Bhangra Vibes",
                            "duration": 215
                        },
                        {
                            "id": 28,
                            "image": "img35",
                            "artist": "Balkar Ankhila",
                            "title": "Punjab's Pride",
                            "duration": 215
                        },
                        {
                            "id": 29,
                            "image": "img36",
                            "artist": "Balkar Ankhila",
                            "title": "Desi Beats",
                            "duration": 215
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Diljit Dosanjh Collection",
                    "image": image12,
                    "title": "Top Hits by Diljit Dosanjh",
                    "description": "Popular Punjabi tracks by Diljit Dosanjh.",
                    "created_by": "Admin",
                    "created_on": "2023-04-01",
                    "modify_on": "2023-04-10",
                    "modify_by": "admin",
                    "saved_count": 150,
                    "track_count": 3,
                    "duration": 700,
                    "issave": true,
                    "tracks": [
                        {
                            "id": 30,
                            "image": "img38",
                            "artist": "Diljit Dosanjh",
                            "title": "Lover's Anthem",
                            "duration": 235
                        },
                        {
                            "id": 31,
                            "image": "img39",
                            "artist": "Diljit Dosanjh",
                            "title": "Punjabi Pride",
                            "duration": 230
                        },
                        {
                            "id": 32,
                            "image": "img40",
                            "artist": "Diljit Dosanjh",
                            "title": "Urban Bhangra",
                            "duration": 235
                        }
                    ]
                }
            ],        
        "followedArtists": [
            {
                "id": 1,
                "name": "Amit Trivedi",
                "bio": "Amit Trivedi is an Indian music director, singer, and composer known for his work in Bollywood music.",
                "image": image18,
                "isverified": true,
                "listener_count": 5000000,
                "follower": 4000000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            },
            {
                "id": 2,
                "name": "Arijit Singh",
                "bio": "Arijit Singh is a celebrated Indian playback singer known for his soulful and emotional voice.",
                "image": image13,
                "isverified": true,
                "listener_count": 10000000,
                "follower": 8500000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            },
            {
                "id": 3,
                "name": "Pritam",
                "bio": "Pritam is an Indian music director and composer known for his versatile compositions across various Bollywood films.",
                "image": image14,
                "isverified": true,
                "listener_count": 7000000,
                "follower": 6000000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            },
            {
                "id": 4,
                "name": "A.R. Rahman",
                "bio": "A.R. Rahman is an internationally acclaimed Indian composer and music producer known for his unique blend of Eastern and Western music styles.",
                "image": image15,
                "isverified": true,
                "listener_count": 12000000,
                "follower": 10000000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            },
            {
                "id": 5,
                "name": "Sachin-Jigar",
                "bio": "Sachin-Jigar are an Indian music director duo known for their contemporary Bollywood compositions.",
                "image": image16,
                "isverified": true,
                "listener_count": 4000000,
                "follower": 3500000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            },
            {
                "id": 6,
                "name": "Akhil",
                "bio": "Akhil is a popular Punjabi singer known for his romantic songs and soulful voice.",
                "image": image17,
                "isverified": true,
                "listener_count": 2500000,
                "follower": 2000000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            },
            {
                "id": 7,
                "name": "Atif Aslam",
                "bio": "Atif Aslam is a Pakistani playback singer and actor, known for his powerful voice and numerous Bollywood hits.",
                "image": image19,
                "isverified": true,
                "listener_count": 8000000,
                "follower": 7000000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            },
            {
                "id": 8,
                "name": "Diljit Dosanjh",
                "bio": "Diljit Dosanjh is an Indian singer, actor, and television presenter known for his Punjabi and Bollywood music.",
                "image": image20,
                "isverified": true,
                "listener_count": 5000000,
                "follower": 4500000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            },
            {
                "id": 9,
                "name": "Vishal-Shekhar",
                "bio": "Vishal-Shekhar is an Indian music director duo known for their contemporary Bollywood and pop compositions.",
                "image": image21,
                "isverified": true,
                "listener_count": 5500000,
                "follower": 5000000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            },
            {
                "id": 10,
                "name": "Vishal Mishra",
                "bio": "Vishal Mishra is an Indian singer, songwriter, and music composer known for his soulful compositions and unique voice.",
                "image": image21,
                "isverified": true,
                "listener_count": 3000000,
                "follower": 2500000,
                "isfollow": true,
                "about": "Popular artist in the genre.",
                "created_by": "system",
                "created_on": "2023-02-20",
                "modify_on": "2023-06-01",
                "modify_by": "admin"
            }
        ]
        ,
        "favoriteTracks": [
            {
                "id": 10,
                "image": img1,
                "artist":"arjit singh",
                "title": "Bright Horizons",
                "duration": 260
            },
            {
                "id": 8,
                "image": img2,
                "artist":"arjit singh",
                "title": "Chords of Life",
                "duration": 250
            },
            {
                "id": 3,
                "image": img3,
                "artist":"arjit singh",
                "title": "Melody in Motion",
                "duration": 240
            },
            {
                "id": 7,
                "image": img4,
                "artist":"arjit singh",
                "title": "Thunder Beats",
                "duration": 230
            },
            {
                "id": 2,
                "image": img5,
                "artist":"arjit singh",
                "title": "Rhythm of the Night",
                "duration": 180
            },
            {
                "id": 9,
                "image": img6,
                "artist":"arjit singh",
                "title": "Dancing Shadows",
                "duration": 220
            },
            {
                "id": 6,
                "image": img7,
                "artist":"arjit singh",
                "title": "Whispers in the Wind",
                "duration": 270
            },
            {
                "id": 4,
                "image": img8,
                "artist":"arjit singh",
                "title": "Harmony of Dreams",
                "duration": 195
            },
            {
                "id": 5,
                "image": img9,
                "artist":"arjit singh",
                "title": "Echoes of Time",
                "duration": 300
            }
        ],
        "favoriteshows": [
            {
                "id": 1,
                "title": "The Great Adventure",
                "image": img1,
                "description": "An epic journey through uncharted territories and incredible landscapes.",
                "episodes": [
                    {
                        "id": 1,
                        "title": "The Journey Begins",
                        "image": img1,
                        "showname": "The Great Adventure",
                        "created_by": "John Doe",
                        "created_on": "2023-05-05",
                        "modify_on": "2023-06-01",
                        "modify_by": "admin",
                        "duraction": 45,
                        "description": "The first step of the adventure."
                    }
                ]
            }
        ],
        "favoritealbum": [
            {
                "id": 1,
                "name": "Glory",
                "image": image23,
                "artist": "Arijit Singh",
                "release_year": "2023",
                "totaltrack": 3,
                "duration": 600,
                "issave": true,
                "copyright": "© 2023 Arijit Singh",
                "created_by": "Admin",
                "created_on": "2023-01-15",
                "modify_on": "2023-02-01",
                "modify_by": "system",
                "tracks": [
                    {
                        "id": 1,
                        "image": "img2",
                        "artist": "Arijit Singh",
                        "title": "Rhythm of Life",
                        "duration": 200
                    },
                    {
                        "id": 2,
                        "image": "img3",
                        "artist": "Arijit Singh",
                        "title": "Morning Melody",
                        "duration": 200
                    },
                    {
                        "id": 3,
                        "image": "img4",
                        "artist": "Arijit Singh",
                        "title": "Echoes of Heart",
                        "duration": 200
                    }
                ]
            },
            {
                "id": 2,
                "name": "Aashiqui 2",
                "image": image24,
                "artist": "Arijit Singh",
                "release_year": "2013",
                "totaltrack": 3,
                "duration": 700,
                "issave": true,
                "copyright": "© 2013 T-Series",
                "created_by": "Admin",
                "created_on": "2013-02-10",
                "modify_on": "2013-03-01",
                "modify_by": "admin",
                "tracks": [
                    {
                        "id": 4,
                        "image": "img6",
                        "artist": "Arijit Singh",
                        "title": "Tum Hi Ho",
                        "duration": 240
                    },
                    {
                        "id": 5,
                        "image": "img7",
                        "artist": "Arijit Singh",
                        "title": "Sun Raha Hai",
                        "duration": 230
                    },
                    {
                        "id": 6,
                        "image": "img8",
                        "artist": "Arijit Singh",
                        "title": "Chahun Main Ya Naa",
                        "duration": 230
                    }
                ]
            },
            {
                "id": 3,
                "name": "Jo Tu Mera Ho",
                "image": image25,
                "artist": "Akhil",
                "release_year": "2021",
                "totaltrack": 2,
                "duration": 360,
                "issave": true,
                "copyright": "© 2021 Akhil Music",
                "created_by": "Akhil",
                "created_on": "2021-03-20",
                "modify_on": "2021-04-10",
                "modify_by": "admin",
                "tracks": [
                    {
                        "id": 7,
                        "image": "img10",
                        "artist": "Akhil",
                        "title": "Jo Tu Mera Ho",
                        "duration": 180
                    },
                    {
                        "id": 8,
                        "image": "img11",
                        "artist": "Akhil",
                        "title": "Pyar Ka Mausam",
                        "duration": 180
                    }
                ]
            },
            {
                "id": 4,
                "name": "Making Memories",
                "image": image26,
                "artist": "Diljit Dosanjh",
                "release_year": "2022",
                "totaltrack": 3,
                "duration": 630,
                "issave": true,
                "copyright": "© 2022 Diljit Dosanjh",
                "created_by": "Diljit",
                "created_on": "2022-07-10",
                "modify_on": "2022-07-15",
                "modify_by": "admin",
                "tracks": [
                    {
                        "id": 9,
                        "image": "img13",
                        "artist": "Diljit Dosanjh",
                        "title": "Memories",
                        "duration": 210
                    },
                    {
                        "id": 10,
                        "image": "img14",
                        "artist": "Diljit Dosanjh",
                        "title": "Moments",
                        "duration": 210
                    },
                    {
                        "id": 11,
                        "image": "img15",
                        "artist": "Diljit Dosanjh",
                        "title": "Cherish",
                        "duration": 210
                    }
                ]
            },
            {
                "id": 5,
                "name": "Yeh Jawaani Hai Deewani",
                "image": image27,
                "artist": "Pritam",
                "release_year": "2013",
                "totaltrack": 3,
                "duration": 720,
                "issave": true,
                "copyright": "© 2013 Dharma Productions",
                "created_by": "Pritam",
                "created_on": "2013-05-15",
                "modify_on": "2013-06-01",
                "modify_by": "admin",
                "tracks": [
                    {
                        "id": 12,
                        "image": "img17",
                        "artist": "Pritam",
                        "title": "Badtameez Dil",
                        "duration": 240
                    },
                    {
                        "id": 13,
                        "image": "img18",
                        "artist": "Pritam",
                        "title": "Kabira",
                        "duration": 240
                    },
                    {
                        "id": 14,
                        "image": "img19",
                        "artist": "Pritam",
                        "title": "Dilliwaali Girlfriend",
                        "duration": 240
                    }
                ]
            },
            {
                "id": 6,
                "name": "Aaj Ki Raat",
                "image": image28,
                "artist": "Amit Trivedi",
                "release_year": "2010",
                "totaltrack": 2,
                "duration": 420,
                "issave": true,
                "copyright": "© 2010 Amit Trivedi Music",
                "created_by": "Amit Trivedi",
                "created_on": "2010-08-10",
                "modify_on": "2010-09-01",
                "modify_by": "admin",
                "tracks": [
                    {
                        "id": 15,
                        "image": "img21",
                        "artist": "Amit Trivedi",
                        "title": "Night Beats",
                        "duration": 210
                    },
                    {
                        "id": 16,
                        "image": "img22",
                        "artist": "Amit Trivedi",
                        "title": "Dance Floor",
                        "duration": 210
                    }
                ]
            },
            {
                "id": 7,
                "name": "Moosetape",
                "image": image29,
                "artist": "Sidhu Moose Wala",
                "release_year": "2021",
                "totaltrack": 3,
                "duration": 690,
                "issave": true,
                "copyright": "© 2021 Sidhu Moose Wala",
                "created_by": "Sidhu Moose Wala",
                "created_on": "2021-06-10",
                "modify_on": "2021-06-15",
                "modify_by": "admin",
                "tracks": [
                    {
                        "id": 17,
                        "image": "img24",
                        "artist": "Sidhu Moose Wala",
                        "title": "295",
                        "duration": 230
                    },
                    {
                        "id": 18,
                        "image": "img25",
                        "artist": "Sidhu Moose Wala",
                        "title": "Bitch I’m Back",
                        "duration": 230
                    },
                    {
                        "id": 19,
                        "image": "img26",
                        "artist": "Sidhu Moose Wala",
                        "title": "Brown Shortie",
                        "duration": 230
                    }
                ]
            },
            {
                "id": 8,
                "name": "Still Rollin",
                "image": image30,
                "artist": "AP Dhillon",
                "release_year": "2022",
                "totaltrack": 3,
                "duration": 660,
                "issave": true,
                "copyright": "© 2022 AP Dhillon",
                "created_by": "AP Dhillon",
                "created_on": "2022-09-15",
                "modify_on": "2022-10-01",
                "modify_by": "admin",
                "tracks": [
                    {
                        "id": 20,
                        "image": "img28",
                        "artist": "AP Dhillon",
                        "title": "Excuses",
                        "duration": 220
                    },
                    {
                        "id": 21,
                        "image": "img29",
                        "artist": "AP Dhillon",
                        "title": "Summer High",
                        "duration": 220
                    },
                    {
                        "id": 22,
                        "image": "img30",
                        "artist": "AP Dhillon",
                        "title": "Brown Munde",
                        "duration": 220
                    }
                ]
            },
            {
                "id": 9,
                "name": "Animal",
                "image": image31,
                "artist": "Vishal Mishra",
                "release_year": "2023",
                "totaltrack": 2,
                "duration": 420,
                "issave": true,
                "copyright": "© 2023 Vishal Mishra",
                "created_by": "Vishal Mishra",
                "created_on": "2023-04-01",
                "modify_on": "2023-05-01",
                "modify_by": "admin",
                "tracks": [
                    {
                        "id": 23,
                        "image": "img32",
                        "artist": "Vishal Mishra",
                        "title": "Roar",
                        "duration": 210
                    },
                    {
                        "id": 24,
                        "image": "img33",
                        "artist": "Vishal Mishra",
                        "title": "Beast Mode",
                        "duration": 210
                    }
                ]
            },
            {
                "id": 10,
                "name": "Ghost",
                "image": "img34",
                "artist": "Atif Aslam",
                "release_year": "2023",
                "totaltrack": 1,
                "duration": 180,
                "issave": true,
                "copyright": "© 2023 Atif Aslam",
                "created_by": "Atif Aslam",
                "created_on": "2023-07-01",
                "modify_on": "2023-07-15",
                "modify_by": "admin",
                "tracks": [
                    {
                        "id": 25,
                        "image": "img35",
                        "artist": "Atif Aslam",
                        "title": "Phantom Love",
                        "duration": 180
                    }
                ]
            }
        ]
    }
]


export default data;