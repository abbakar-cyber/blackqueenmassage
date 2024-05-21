import React from 'react'


const Cards = () => {
  return (
    <div className='mt-8 lg:ml-28 mb-10 grid lg:grid-cols-3 gap-10 p-4'>
        <div className='  overflow-hidden mb-10 border-purple-90 border p-10 items-center relative ml-4 ' >
        <h2 className='mt-8 ml-6 bold-40 text-purple-90'>$99</h2>
            <div className='m-4'>
            <span>1 Hour hot massage</span>
            <button className='block bg-purple-90 text-white px-16 py-2 rounded mt-6'>Book Now</button>
            </div>
            <div className='bg-purple-50 text-white rounded-full p-2 absolute top-0 ml-2 mt-6 '>
              <span>1 Hour </span>
            </div>
        </div>
        <div className='  overflow-hidden mb-10 border-purple-90 border p-10 items-center relative ml-4' >
              <span className=""><h2 className='mt-8 ml-6 bold-40 text-purple-90'>$99</h2></span>
            <div className='m-4'>
            <span>1 Hour hot massage</span>
            <button className='block bg-purple-90 text-white px-16 py-2 rounded mt-6'>Book Now</button>
            </div>
            <div className='bg-purple-50 text-white rounded-full p-2 absolute top-0 ml-2 mt-6 '>
              <span>1 Hour </span>
            </div>
        </div>
        <div className='  overflow-hidden mb-10 border-purple-90 border p-10 items-center relative ml-4' >
        <h2 className='mt-8 ml-6 bold-40 text-purple-90'>$99</h2>
            <div className='m-4'>
            <span>1 Hour hot massage</span>
            <button className='block bg-purple-90 text-white px-16 py-2 rounded mt-6'>Book Now</button>
            </div>
            <div className='bg-purple-50 text-white rounded-full p-2 absolute top-0 ml-2 mt-6 '>
              <span>1 Hour </span>
            </div>
        </div>
        
    </div>
    
  )
}

export default Cards