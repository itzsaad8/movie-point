import React from 'react'

const Headeritems = ({name,Icon}) => {
  return (
    <div className='flex font-semibold gap-3 items-center text-[15px] hover:underline underline-offset-8  cursor-pointer mb-2'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default Headeritems