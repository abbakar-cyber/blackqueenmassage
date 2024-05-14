import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className=''>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link href='/ ' className='py-2'>
                <Image src='/bqms-logo.png' alt='logo' width={80} height={78}/>
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4'>
              <Link href='/' className='hover:text-white hover:bg-purple-90 rounded-lg p-2'>Home</Link>
              <Link href='/' className='hover:text-white hover:bg-purple-90 rounded-lg p-2'>Services</Link>
              <Link href='/' className='hover:text-white hover:bg-purple-90 rounded-lg p-2'>About</Link>
              <Link href='/' className='hover:text-white hover:bg-purple-90 rounded-lg p-2'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar