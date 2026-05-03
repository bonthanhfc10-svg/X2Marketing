// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from "../components/NewsletterBox";

// const About = () => {
//   return (
//     <div>
//       <div className=' text-2xl text-center pt-8  border-t'>
//           <Title text1={'ABOUT'} text2={'US'}/>
//       </div>
//       <div className='my-10 flex flex-col  md:flex-row gap-16'>
//           <img className=' w-full md:max-w-[450px]  ' src={ assets.about_img} alt=""/>
//           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde, veniam quas libero asperiores excepturi itaque laudantium corporis in, voluptatem aliquid nihil.</p>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde, veniam quas libero asperiores excepturi itaque laudantium corporis in, voluptatem aliquid nihil.</p>
//               <b className=' text-gray-800'>Our Mission </b>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde, veniam quas libero asperiores excepturi itaque laudantium corporis in, voluptatem aliquid nihil.</p>
//           </div>
//       </div>
//       <div className=' text-2xl  py-4'>
//           <Title text1={'WHY'} text2={'CHOOSE US'}/>
//       </div>
//       <div className='flex flex-col  md:flex-row text-sm mb-20'>
//         <div className=' border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5'>
//           <b>Quantity Assurance:</b>
//           <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde, veniam quas libero asperiores excepturi itaque laudantium corporis in, voluptatem aliquid nihil.</p>

//         </div>
//         <div className=' border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5'>
//           <b>Conveniece:</b>
//           <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde, veniam quas libero asperiores excepturi itaque laudantium corporis in, voluptatem aliquid nihil.</p>
          
//         </div>
//         <div className=' border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5'>
//           <b>Exceptional Customer Service :</b>
//           <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde, veniam quas libero asperiores excepturi itaque laudantium corporis in, voluptatem aliquid nihil.</p>
          
//         </div>

//       </div>

//       <NewsletterBox/>

//     </div>
//   )
// }

// export default About
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div className='px-4 sm:px-8'>

      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'X2 MARKETING'} />
        <p className='text-gray-500 text-sm mt-3'>
          Helping brands grow faster on Facebook, TikTok, Instagram and YouTube
        </p>
      </div>

      <div className='my-14 flex flex-col md:flex-row gap-12 items-center'>
        <div className='w-full md:w-1/2'>
          <img 
            className='w-full md:max-w-[520px] rounded-3xl shadow-xl' 
            src={assets.about_img} 
            alt="About X2 Marketing"
          />
        </div>

        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-600'>
          <p className='text-blue-600 font-semibold'>
            WHO WE ARE
          </p>

          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 leading-tight'>
            We Build Powerful Digital Brands
          </h2>

          <p className='leading-relaxed'>
            X2 Marketing is a creative digital marketing agency focused on helping businesses grow online with smart strategy, attractive content, and powerful advertising.
          </p>

          <p className='leading-relaxed'>
            We help brands promote products and services on Facebook, TikTok, Instagram, YouTube, and other digital platforms.
          </p>

          <div className='bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-6'>
            <b className='text-gray-900'>Our Mission</b>
            <p className='mt-2 leading-relaxed'>
              Our mission is to help every business grow faster, reach more customers, and build a strong online presence.
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 my-12'>
        <div className='bg-white border rounded-2xl p-6 text-center shadow-sm'>
          <p className='text-3xl font-bold text-blue-600'>2X</p>
          <p className='text-gray-500 mt-2'>Growth Strategy</p>
        </div>

        <div className='bg-white border rounded-2xl p-6 text-center shadow-sm'>
          <p className='text-3xl font-bold text-purple-600'>100%</p>
          <p className='text-gray-500 mt-2'>Creative Content</p>
        </div>

        <div className='bg-white border rounded-2xl p-6 text-center shadow-sm'>
          <p className='text-3xl font-bold text-pink-600'>24/7</p>
          <p className='text-gray-500 mt-2'>Online Support</p>
        </div>
      </div>

      <div className='text-2xl py-8 text-center'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-20'>
        <div className='border rounded-3xl px-8 py-10 flex flex-col gap-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300'>
          <p className='text-4xl'>🎯</p>
          <b className='text-lg text-gray-900'>Smart Targeting</b>
          <p className='text-gray-600 leading-relaxed'>
            We target the right audience so your ads reach people who are interested in your product or service.
          </p>
        </div>

        <div className='border rounded-3xl px-8 py-10 flex flex-col gap-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300'>
          <p className='text-4xl'>📱</p>
          <b className='text-lg text-gray-900'>Social Media Experts</b>
          <p className='text-gray-600 leading-relaxed'>
            We create strategies for Facebook, TikTok, Instagram, and YouTube to help your brand grow online.
          </p>
        </div>

        <div className='border rounded-3xl px-8 py-10 flex flex-col gap-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300'>
          <p className='text-4xl'>🚀</p>
          <b className='text-lg text-gray-900'>Real Business Growth</b>
          <p className='text-gray-600 leading-relaxed'>
            Our goal is not only likes and views. We focus on real customers, sales, and long-term brand growth.
          </p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About