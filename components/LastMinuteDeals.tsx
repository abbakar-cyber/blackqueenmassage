"use client"
import React from "react";

const LastMinuteDeals = () => {
  const phoneNumber = "+17869919540";
  const handleTextMessage = () =>{
    window.location.href= `sms:${phoneNumber}`
  }
  return (
    
    <div className="">
      
        <div className="  overflow-hidden mb-10 bg-gray-200 shadow-lg rounded-lg p-10 items-center  ml-4 ">
          <h3 className="bold-40 lg:bold-64">Last Minute Deals</h3>
            <p className="mt-4"> Relax, restore and refresh for even less than our low introductory prices with these Las Minute Deals. Only 
              a limited number of these deals are available but they represent our absolute lowest price for either our 
              1 hour Massage of Facial.
            </p>
            <button className='block bg-gray-400  px-16 py-2 rounded mt-6' onClick={handleTextMessage}>FIND A LAST MINUTE DEAL</button>
        </div>
    </div>
  );
};

export default LastMinuteDeals;
