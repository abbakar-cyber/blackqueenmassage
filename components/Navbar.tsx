"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {

        const [isClick, setisClick] = useState(false);
        const toggleNavbar = () =>{
          setisClick(!isClick)
        }

  return (
    <nav className=''>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link href='/ ' >
                <Image src='/bqms-logo.png' alt='logo' width={120} height={94} className='mt-14'/>
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4 '>
              <Link href='/' className='hover:text-white hover:bg-purple-90 rounded-lg p-2'>Home</Link>
              <Link href='/' className='hover:text-white hover:bg-purple-90 rounded-lg p-2'>Services</Link>
              <Link href='/' className='hover:text-white hover:bg-purple-90 rounded-lg p-2'>About</Link>
              <Link href='/' className='hover:text-white hover:bg-purple-90 rounded-lg p-2'>Contact Us</Link>
              <button className=' bg-purple-90 text-white px-16 py-2 rounded'>Book Now</button>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <button className='inline-flex justify-center items-center p-2 rounded-md text-black   focus:outline-none
            focus:ring-2 focus:ring-inset focus:ring-black' onClick={toggleNavbar}>
              {isClick ? (
                <svg className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill="none"
                viewBox='0 0 24 24'
                stroke='currentColor'>
                  <path 
                  strokeLinecap="round"
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill="none"
                viewBox='0 0 24 24'
                stroke='currentColor'>
                  <path 
                  strokeLinecap="round"
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
            {isClick && (
              <div className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-20'>
                <Link href='/' className='hover:text-white block hover:bg-purple-90 rounded-lg p-2'>Home</Link>
              <Link href='/' className='hover:text-white block hover:bg-purple-90 rounded-lg p-2'>Services</Link>
              <Link href='/' className='hover:text-white block hover:bg-purple-90 rounded-lg p-2'>About</Link>
              <Link href='/' className='hover:text-white block hover:bg-purple-90 rounded-lg p-2'>Contact Us</Link>
                </div>
              </div>
            )}
    </nav>
  )
}

export default Navbar