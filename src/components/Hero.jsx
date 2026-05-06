import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden border border-gray-200 shadow-sm'>

      {/* LEFT SIDE */}
      <div className='w-full sm:w-1/2 px-8 sm:px-12 py-12'>

        <p className='text-blue-600 font-semibold mb-2 text-sm'>
          X2 MARKETING AGENCY
        </p>

        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-gray-900'>
          Grow Your Brand On Social Media
        </h1>

        <p className='text-gray-600 mt-4 text-sm leading-relaxed'>
          We help businesses grow faster with Facebook, TikTok, Instagram, and YouTube marketing.
        </p>

        {/* BUTTONS */}
        <div className='flex gap-3 mt-6 flex-wrap'>

          {/* TELEGRAM BUTTON */}
          <a
            href='https://t.me/x2didgitalmarketing'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition'
          >
            Get Started
          </a>

          {/* SERVICES BUTTON */}
          <Link
            to='/collection'
            className='border border-gray-400 px-5 py-2 rounded-full text-sm font-semibold hover:bg-white transition'
          >
            View Services
          </Link>

        </div>

        {/* SOCIAL TAGS */}
        <div className='flex gap-2 mt-6 text-xs font-semibold flex-wrap'>

          <span className='bg-white px-3 py-1 rounded-full shadow'>
            Facebook
          </span>

          <span className='bg-white px-3 py-1 rounded-full shadow'>
            TikTok
          </span>

          <span className='bg-white px-3 py-1 rounded-full shadow'>
            Instagram
          </span>

          <span className='bg-white px-3 py-1 rounded-full shadow'>
            YouTube
          </span>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className='w-full sm:w-1/2 h-full'>

        <img
          className='w-full h-full object-cover scale-105 rounded-3xl shadow-2xl'
          src={assets.hero_img}
          alt='Digital Marketing'
        />

      </div>

    </div>
  )
}

export default Hero