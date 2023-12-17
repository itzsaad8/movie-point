import React from 'react'
const img_base_url = "https://image.tmdb.org/t/p/original"

const Hrmoviecard = ({movie}) => {
  return (
    
    <section className='group hover:scale-105 transition-all duration-150 ease-in '>
    <img src={img_base_url+movie.backdrop_path} 
    className='w-[110px] md:w-[250px] cursor-pointer rounded-lg group-hover:border-[3px] group-hover:border-gray-400' alt="" />
    <h2 className='w-[110px] md:w-[250px] mt-2'>{movie.title}</h2>
 </section>
  )
}

export default Hrmoviecard