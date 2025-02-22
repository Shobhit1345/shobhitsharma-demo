import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title ="Get Started"}) => {
  return (
    <div className='w-[130px] px-4 py-2 bg-white text-black rounded-full text-sm flex items-center justify-between'>
        <span className='text-sm font-semibold'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button