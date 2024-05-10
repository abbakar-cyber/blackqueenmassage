import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">HAIR REMOVAL ENHANCEMENTS*</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Black Queen Massage and Escorts offers professional, 
            convenient and affordable face and body hair removal services for 
            <strong> WOMEN</strong> and <strong>MEN</strong>. All services provided by licensed esthicians
            using our botanically based wax-free system. It includes:
          </p>
          <ul className='list-disc ml-8'>
            <li>EYEBROWS</li>
            <li>LIP OR CHIN</li>
            <li>FULL FACE</li>
            <li>UNDERARMS</li>
            <li>ARMS HALF</li>
            <li>ARMS FULL</li>
            <li>LEGS HALF</li>
            <li>LEGS FULL</li>
            <li>BACK OR CHEST</li>
            <li>BIKINI</li>
            <li>BRAZILIAN</li>
          </ul>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/bg-bg-img.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Hot stone </p>
                <p className="bold-16 ">1 hour</p>
              </div>
              <p className="bold-20 mt-2">Aromatherapy</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Cold Stone</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Mini cold stone face massage</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide