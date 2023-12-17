import React from 'react'
import Genrelist from '../constant/Genreslist'
import Movielist from './movielist'

const Genremovielist = () => {
  return (
    <div>
        {
            Genrelist.genere.map((item,index)=>index<=9&&(
                <div className='md:p-2 p-0  px-8 md:px-16'>
                  <h2 className='text-[20px] w-[50px] font-bold border-b-4 border-orange-800'>{item.name}</h2>
             
                  
                  <Movielist genreId={item.id} index_={index}/>

                </div>
            ))
        }
    </div>
  )
}

export default Genremovielist