import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../servies/GlobalApi'
import Moviecard from './Moviecard'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi2'
import Hrmoviecard from './Hrmoviecard'

const Movielist = ({genreId,index_}) => {
    const [movielist,setMovielist]=useState([])
    const elementRef = useRef();
    const screenwidth = window.innerWidth

    useEffect(()=>{
        getmoviebygenreid();
    },[])
    const getmoviebygenreid =async  ()=>{
         const resp =  await GlobalApi.getmoviebygenreid(genreId)
         
            console.log(resp)
            setMovielist(resp.data.results)
        
    }
    const sliderLeft= (element)=>{
        element.scrollLeft-=screenwidth-125
    }
    const sliderRight= (element)=>{
        element.scrollLeft+=screenwidth-125
    }
  return (
    <div className=''>
    <HiChevronLeft className={`hidden md:block text-white text-[30px] absolute cursor-pointer mx-8 left-0 ${index_%3===0 ? 'mt-[80px] ': 'mt-[155px]'}  `}onClick={()=>sliderLeft(elementRef.current)} />
    <HiChevronRight className={`hidden md:block text-white cursor-pointer text-[30px] absolute mx-8 right-0  ${index_%3===0 ? 'mt-[80px] ': 'mt-[155px]'} `} onClick={()=>sliderRight(elementRef.current)} />
    
    <div ref={elementRef} className='flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth md:py-5 py-2 px-2'>
        {
            movielist.map((item,index)=>(

                <>
                {
                    index_%3==0 ? <Hrmoviecard movie={item}/>    :<Moviecard movie={item}/>
                }
               
                </>
            ))
        }
    </div>

    </div>
  )
}

export default Movielist