import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-3 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex justify-between items-center'>
        <img  src={val.url} alt="" />
        <span className='font-semibold text-white '>{val.number}</span>
    </div>
  )
}

export default Stripe;