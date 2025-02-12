import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {   // if there is no title then just set the title
  return (
    <div className='min-w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
    <span className='text-sm font-medium text-black'>{title}</span>
    <IoIosReturnRight/>
    </div>
  )
}

export default Button
