import Title from 'antd/es/skeleton/Title'
import React from 'react'

const Card1 = ({ img, title, txt,innertxt }) => {
  return (
    <div className='md:w-[40%] md:h-[40vh] shadow-2xl mob:m-[20px] md:m-0 p-[3%]'>
      <img src={img} />
      <h1 className='font-bold text-[20px] m-[10px] dark:text-[white]'>{title}</h1>
      <p className='text-[#535353] m-[10px] dark:text-[white]'>{txt}</p>
      <p className='text-[blue] m-[10px]'>{innertxt}</p>
    </div>
  )
}

export default Card1