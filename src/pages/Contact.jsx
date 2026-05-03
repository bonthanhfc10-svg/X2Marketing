// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from "../components/NewsletterBox";

// const Contact = () => {
//   return (
//     <div>
//       <div className=' text-center text-2xl pt-10 border-t'>
//         <Title text1={'CONTACT'} text2={'US'}/>
//       </div>
//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt=""/>
//         <div className='flex flex-col justify-center items-start gap-6'>
//             <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//             <p className='text-gray-500'>098765432 Willms  Station <br/> Suit 2025, Washington, CAMBODIA </p>
//             <p className='text-gray-500 '>Phone : 0987654321 <br/> Email: bonthanhfc10@gmail.com </p>
//             <p className='text-gray-600 font-semibold text-xl'> Careers of Online Shop </p>
//             <p className=' text-gray-500'>Learn More  about out teams job openings. </p>
//             <button className='border border-black  px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'> Explore Jobs</button>
//         </div>
//       </div>
//       <NewsletterBox/>
//     </div>
//   )
// }

// export default Contact
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from "../components/NewsletterBox"

const Contact = () => {
  return (
    <div className='px-4 sm:px-8'>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'X2 MARKETING'} />
        <p className='text-gray-500 text-sm mt-3'>
          Let’s grow your brand on Facebook, TikTok, Instagram and YouTube
        </p>
      </div>

      <div className='my-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        
        <div>
          <img 
            className='w-full md:max-w-[520px] rounded-3xl shadow-xl' 
            src={assets.contact_img} 
            alt="Contact X2 Marketing"
          />
        </div>

        <div className='flex flex-col gap-6'>

          <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-lg'>
            <p className='text-sm font-semibold text-blue-100'>GET IN TOUCH</p>
            <h2 className='text-3xl font-bold mt-2'>
              Start Your Digital Growth Today
            </h2>
            <p className='text-blue-100 mt-4 leading-relaxed'>
              Contact us for social media marketing, ads, branding, content design, and online business growth.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className='bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition'>
              <p className='text-3xl mb-3'>📞</p>
              <p className='font-bold text-gray-800'>Phone</p>
              <a href='tel:+855969249879' className='text-gray-500 hover:text-blue-600'>
                +855 0969249879
              </a>
            </div>

            <div className='bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition'>
              <p className='text-3xl mb-3'>📧</p>
              <p className='font-bold text-gray-800'>Email</p>
              <a href='xtwo.digitalmarketing@gmail.com' className='text-gray-500 hover:text-blue-600'>
                xtwo.digitalmarketing@gmail.com
              </a>
            </div>

            <div className='bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition'>
              <p className='text-3xl mb-3'>📍</p>
              <p className='font-bold text-gray-800'>Location</p>
              <p className='text-gray-500'>
                Phnom Penh, Cambodia
              </p>
            </div>

            <div className='bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition'>
              <p className='text-3xl mb-3'>💬</p>
              <p className='font-bold text-gray-800'>Social Media</p>
              <a href='https://t.me/x2didgitalmarketing' className='text-gray-500 hover:text-blue-600'>
                Facebook.Phone.Telegram
              </a>
              
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='https://www.facebook.com/share/17gbFQDgjE/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-600 text-white px-8 py-4 rounded-full text-center font-semibold hover:bg-blue-700 transition'
            >
              Message on Facebook
            </a>

            <a
              href='https://t.me/x2didgitalmarketing'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-black text-white px-8 py-4 rounded-full text-center font-semibold hover:bg-gray-800 transition'
            >
              Chat on Telegram
            </a>
          </div>

        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact