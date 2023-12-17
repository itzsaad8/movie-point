import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../servies/GlobalApi'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi2'
const img_base_url = "https://image.tmdb.org/t/p/original"

const Slider = () => {
    const [movielist,setMovielist] = useState([])
    const elementRef = useRef();
    const screenwidth = window.innerWidth
    useEffect(()=>{
     gettrendingvedios()
    },[])
    const gettrendingvedios = async()=>{
        await GlobalApi.gettrendingvedios.then(resp=>{
            // console.log(resp.data.results)
            setMovielist(resp.data.results)
        })
    }
    const sliderLeft= (element)=>{
        element.scrollLeft-=screenwidth-125
    }
    const sliderRight= (element)=>{
        element.scrollLeft+=screenwidth-125
    }
  return (
       <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute cursor-pointer mx-8 mt-[155px]'onClick={()=>sliderLeft(elementRef.current)} />
        <HiChevronRight className='hidden md:block text-white cursor-pointer text-[30px] absolute mx-8 mt-[155px] right-0' onClick={()=>sliderRight(elementRef.current)} />
    <div className='flex overflow-x-auto px-16 py-4 w-full scrollbar-hide scroll-smooth' ref={elementRef}>
        {
            movielist.map((movie,index)=>(
                <img src={img_base_url+movie.backdrop_path
                } alt="" 
                className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md
                hover:border-[4px] border-gray-300 transition-all ease-in'/>
            ))
        }
    </div>
    </div>
  )
}

export default Slider