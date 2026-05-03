// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className=' flex flex-col sm:flex-row border border-gray-400'>
//         {/* Hero left Sidebar */}
//             <div className=' w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//               <div className=' text-[#414141]'>
//                   <div className='flex items-center gap-2'>
//                       <p className='w-8 md:w-11 h-[2px] bg-[#414141]'   ></p>
//                       <p className='font-medium text-sm md:text-base'>OUR BESTSELL </p>
//                   </div>
//                   <h1 className=' prata-regular text-3xl  sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                   <div className=' flex items-center gap-2'>
//                       <p className=' font-semibold text-sm md:text-base'> SHOW NOW</p>
//                       <p className=' w-8 md:w-11 h-[1px] bg-[#414141] '></p>

//                   </div>
//               </div>

//             </div>
//             {/* Hero right side */}
//             <img className='w-full sm:w-1/2' src={assets.hero_img} alt=""/>
            

//     </div>
//   )
// }

// export default Hero
import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden border border-gray-200 shadow-sm'>
      
      <div className='w-full sm:w-1/2 px-8 sm:px-14 py-16'>
        <p className='text-blue-600 font-semibold mb-3'>X2 MARKETING AGENCY</p>

        <h1 className='text-4xl lg:text-6xl font-bold leading-tight text-gray-900'>
          Grow Your Brand On Social Media
        </h1>

        <p className='text-gray-600 mt-5 text-base leading-relaxed'>
          We help businesses grow faster with Facebook, TikTok, Instagram, YouTube marketing, ads, content creation, and branding.
        </p>

        <div className='flex gap-4 mt-8'>
          <button className='bg-blue-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition'>
            Get Started
          </button>

          <button className='border border-gray-400 px-7 py-3 rounded-full font-semibold hover:bg-white transition'>
            View Services
          </button>
        </div>

        <div className='flex gap-3 mt-8 text-sm font-semibold'>
          <span className='bg-white px-4 py-2 rounded-full shadow'>Facebook</span>
          <span className='bg-white px-4 py-2 rounded-full shadow'>TikTok</span>
          <span className='bg-white px-4 py-2 rounded-full shadow'>Instagram</span>
          <span className='bg-white px-4 py-2 rounded-full shadow'>YouTube</span>
        </div>
      </div>

      <div className='w-full sm:w-1/2 p-8'>
        <img 
          className='w-full rounded-3xl shadow-xl' 
          src={assets.hero_img} 
          alt="Digital Marketing"
        />
      </div>

    </div>
  )
}

export default Hero