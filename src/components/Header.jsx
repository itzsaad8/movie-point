import React, { useState } from 'react'
import logo from '../assets/imgs/logo2.png'
import dp from '../assets/imgs/2.jpg'
import { HiHome, HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import Headeritems from './Headeritems';
const Header = () => {
    const [toggle,setToggle] = useState(false)
    const menu = [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCHLIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        },
    ]
  return (
    <div className='flex items-center justify-between mt-2 px-1 sm:px-5'>
        <div className='flex items-center gap-8'>
        <img src={logo}  alt=""
        className='text-white w-[60px] md:w-[90px] object-cover '/>
        <div className='hidden md:flex mt-2 gap-8'>
        {
            menu.map((item)=>(
                 <Headeritems name={item.name} Icon={item.icon}/>
            ))
        }
        </div>
        <div className='flex md:hidden mt-2 gap-1'>
        {
            menu.map((item, index)=>index<3 &&(
                 <Headeritems name={''} Icon={item.icon}/>
            ))
        }

        <div className='md:hidden' onClick={()=> setToggle(!toggle)}>
            <Headeritems name={''}  Icon={HiDotsVertical}/>
          { toggle ?
          <div className='absolute mt-5 border-[1px] border-gray-600 bg-[#121212] p-3 px-4 py-5'>
          {
          menu.map((item, index)=>index>2 &&(
               <Headeritems name={item.name} Icon={item.icon}/>
          ))
      }
          </div>
          :null

          }  
        </div>
        </div>
        </div>
        <img src={dp} className='w-[40px] h-[40px] rounded-full' alt="" />
    </div>
  )
} 

export default Header