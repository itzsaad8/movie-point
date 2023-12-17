import React from 'react'
import disny from '../assets/imgs/disney.png'
import marvel from '../assets/imgs/marvel.png'
import national from '../assets/imgs/nationalG.png'
import starwar from '../assets/imgs/starwar.png'
import pixar from '../assets/imgs/pixar.png'
// import disney from '../assets/imgs/disney.png'
import disnyv from '../assets/vedios/disney.mp4'
import marvelv from '../assets/vedios/marvel.mp4'
import nationalv from '../assets/vedios/national-g.mp4'
import starwarv from '../assets/vedios/star-wars.mp4'
import pixarv from '../assets/vedios/pixar.mp4'
const Production = () => {
    const productionlist = [
        {
            id:1,
            image:disny,
            vedio:disnyv
        },
        {
            id:1,
            image:marvel,
            vedio:marvelv
        },
        {
            id:1,
            image:national,
            vedio:nationalv
        },
        {
            id:1,
            image:starwar,
            vedio:starwarv
        },
        {
            id:1,
            image:pixar,
            vedio:pixarv
        },
    ]
  return (
    <div className='flex gap-2 md:gap-4 px-5 md:px-16 p-2'>
        {
            productionlist.map((item)=>(
                <div className='rounded-lg border-[2px] border-gray-600 
                cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out relative shadow-xl shadow-gray-800 '>
                    <video src={item.vedio} autoPlay loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'></video>
                    <img src={item.image} className='w-full z-[1]' alt="" />
                    
                </div>
            ))
        }
    </div>
  )
}

export default Production