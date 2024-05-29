"use client"
import React from 'react'


const Cards = () => {
  const phoneNumber = "+17869919540";
  const handleTextMessage = () =>{
    window.location.href= `sms:${phoneNumber}`
  }
  return (
    <div className='mt-8 lg:ml-28 mb-10 grid lg:grid-cols-3 gap-10 p-4'>
        <div className='  overflow-hidden mb-10 border-purple-90 border p-10 items-center relative ml-4 ' >
        <h2 className='mt-8 ml-6 bold-52 text-purple-90'>$350</h2>
            <div className='m-4'>
            <span>1 Hour NURU Massage</span>
            <button className='block bg-purple-90 text-white px-16 py-2 rounded mt-6' onClick={handleTextMessage}>Book Now</button>
            </div>
            <div className='bg-purple-50 text-white rounded-full p-2 absolute top-0 ml-2 mt-6 '>
            <svg className='w-6 inline-block' fill='none' stroke-linecap="round" strokeLinejoin='round' strokeWidth={2} stroke='currentColor'
               viewBox='0 0 24 24'><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>1 Hour </span>
            </div>
        </div>
        <div className='  overflow-hidden mb-10 border-purple-90 border p-10 items-center relative ml-4' >
              <span className=""><h2 className='mt-8 ml-6 bold-52 text-purple-90'>$150</h2></span>
            <div className='m-4'>
            <span>1 Hour Deep Tissue Massage</span>
            <button className='block bg-purple-90 text-white px-16 py-2 rounded mt-6' onClick={handleTextMessage}>Book Now</button>
            </div>
            <div className='bg-purple-50 text-white rounded-full p-2 absolute top-0 ml-2 mt-6 '>
              <svg className='w-6 inline-block' fill='none' stroke-linecap="round" strokeLinejoin='round' strokeWidth={2} stroke='currentColor'
               viewBox='0 0 24 24'><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>1 Hour </span>
            </div>
        </div>
        <div className='  overflow-hidden mb-10 border-purple-90 border p-10 items-center relative ml-4' >
        <h2 className='mt-8 ml-6 bold-52 text-purple-90'>$250</h2>
            <div className='m-4'>
            <span>30 MIn Couple Massage</span>
            <button className='block bg-purple-90 text-white px-16 py-2 rounded mt-6' onClick={handleTextMessage}>Book Now</button>
            </div>
            <div className='bg-purple-50 text-white rounded-full p-2 absolute top-0 ml-2 mt-6 '>
            <svg className='w-6 inline-block' fill='none' stroke-linecap="round" strokeLinejoin='round' strokeWidth={2} stroke='currentColor'
               viewBox='0 0 24 24'><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>30 Min </span>
            </div>
        </div>
        
    </div>
    
  )
}

export default Cards