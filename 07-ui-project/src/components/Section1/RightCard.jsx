import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative shrink-0 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt=""></img>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between' tag={props.tag} id={props.id}>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id + 1}</h2>
        <div className='flex flex-col gap-6'>
            <p className='text-lg w-[90%] leading-relaxed text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis facilis quisquam culpa voluptatibus ut a. Quasi, nam amet! Facere, est?</p>
            <div className='flex justify-between items-center'>
                <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard
