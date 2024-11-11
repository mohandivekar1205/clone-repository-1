import React from 'react'

const Button = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-end mr-5 opacity-0 group-hover:opacity-100 transition-ease-in duration-300">
    <button className="bg-green-500 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M8 5v14l11-7z" />
        </svg>
    </button>
</div>
  )
}

export default Button