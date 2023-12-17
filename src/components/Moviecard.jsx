import React from 'react'
const img_base_url = "https://image.tmdb.org/t/p/original"
const Moviecard = ({movie}) => {
  return (
    <>
       <img src={img_base_url+movie.poster_path} 
       className='w-[110px] md:w-[200px] hover:scale-105 transition-all duration-150 ease-in cursor-pointer rounded-lg hover:border-[3px] hover:border-gray-400' alt="" />
    </>
  )
}

export default Moviecard