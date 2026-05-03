// import React from 'react'
// import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm  md:text-base text-gray-700'>
//         <div className=''>
//             <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=""/>
//             <p className=' font-semibold'>Easy Exchange Policy</p>
//             <p className='text-gray-400'>We offer hassle free exchange policy </p>

//         </div>
//         <div className=''>
//             <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=""/>
//             <p className=' font-semibold'>7 days Return Policy</p>
//             <p className='text-gray-400'>We Provide 7 day free return policy </p>

//         </div>
//         <div className=''>
//             <img src={assets.support_img} className='w-12 m-auto mb-5' alt=""/>
//             <p className=' font-semibold'>Best Customer Support</p>
//             <p className='text-gray-400'>We Provide 24/7 customer support </p>

//         </div>

//     </div>
//   )
// }

// export default OurPolicy
import React from 'react'

const OurPolicy = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 py-16 text-center'>
      
      <div className='bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition'>
        <p className='text-4xl mb-4'>🚀</p>
        <p className='font-bold text-gray-800'>Fast Growth</p>
        <p className='text-gray-400 mt-2'>We help your brand grow faster online</p>
      </div>

      <div className='bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition'>
        <p className='text-4xl mb-4'>🎯</p>
        <p className='font-bold text-gray-800'>Targeted Ads</p>
        <p className='text-gray-400 mt-2'>Reach the right customers with smart ads</p>
      </div>

      <div className='bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition'>
        <p className='text-4xl mb-4'>💬</p>
        <p className='font-bold text-gray-800'>Social Support</p>
        <p className='text-gray-400 mt-2'>Facebook, TikTok, Instagram and YouTube</p>
      </div>

    </div>
  )
}

export default OurPolicy