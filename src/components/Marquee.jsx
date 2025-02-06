import React from 'react'
import { ImGift } from 'react-icons/im'

function Marquee({imagesurl}) {
  return (
    <div className='flex gap-16 w-full overflow-hidden py-8 whitespace-nowrap'>
      {imagesurl.map(url => <img src={url} className='w-[15vw] h-10 flex-shrink-0' />)}
      {imagesurl.map(url => <img src={url} className='' />)}
    </div>
  )
}

export default Marquee
