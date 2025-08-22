import React from 'react'

const Title = ({title}) => {
 
  return (
    <div className='flex flex-col items-start'>
      <h1 className='text-[#1B1B1B] text-3xl '>{title}</h1>
    </div>
  )
}

export default Title
