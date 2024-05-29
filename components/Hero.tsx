import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        
        <h1 className="bold-52 lg:bold-88">Black Queen Massage and Escort</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Black Queen Massage and Escort offers expert massage, 
          facial and hair removal services seven days a week for your convenience.
           Our massage therapist and Estheticians will be delighted to customize any of 
           our services to meet your specific needs.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 ">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

       
      </div>
    </section>
  )
}

export default Hero