import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-4 py-5 border-[1px] border-gray-700 gap-12 flex justify-between items-center text-white'>
      <img src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
