"use client"
import React from 'react'

const NewService = () => {
    const phoneNumber = "+17869919540";
    const handleTextMessage = () =>{
      window.location.href= `sms:${phoneNumber}`
    }
  return (
    <div className="max-w-md mx-auto mt-10">
        <strong className='bold-32 lg:bold-64'>ReQuest Service</strong>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                    Phone Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="number"
                    type="number"
                    placeholder="+1"
                />
                
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Address
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="text"
                    type="text"
                    placeholder="Residential address"
                />
                
                </div>
                <div className="flex items-center justify-between">
                <button
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleTextMessage}
                >
                    Submit
                </button>
                
                </div>
      </form>
      
    </div>
  )
}

export default NewService