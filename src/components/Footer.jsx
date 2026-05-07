// Footer.jsx

import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (

    <footer className='bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-gray-300 pt-16 pb-6 mt-16'>

      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>

          {/* LEFT SIDE */}
          <div className='md:col-span-2'>

            <img
              src={assets.logo}
              className='mb-5 w-36 bg-white p-2 rounded-xl'
              alt='Logo'
            />

            <p className='w-full md:w-3/4 leading-relaxed mb-6 text-gray-400'>
              X2 Digital Marketing helps businesses grow online with
              Facebook, TikTok, Instagram, YouTube marketing,
              creative content, branding, and smart advertising.
            </p>

            {/* SOCIAL ICONS */}
            <div className='flex gap-4'>

              {/* FACEBOOK */}
              <a
                href='https://www.facebook.com/share/17gbFQDgjE/'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white/10 p-3 rounded-full hover:bg-blue-600 transition'
              >
                <img
                  src={assets.facebook_icon}
                  alt='Facebook'
                  className='w-5 h-5'
                />
              </a>

              {/* TELEGRAM */}
              <a
                href='https://t.me/x2didgitalmarketing'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white/10 p-3 rounded-full hover:bg-sky-500 transition'
              >
                <img
                  src={assets.telegram_icon}
                  alt='Telegram'
                  className='w-5 h-5'
                />
              </a>

              {/* PHONE */}
              <a
                href='tel:+855969249879'
                className='bg-white/10 p-3 rounded-full hover:bg-green-600 transition'
              >
                <img
                  src={assets.telephone_icon}
                  alt='Phone'
                  className='w-5 h-5'
                />
              </a>

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <p className='text-lg font-bold mb-6 text-white uppercase tracking-wider'>
              Company
            </p>

            <ul className='flex flex-col gap-3'>

              <li>
                <Link
                  to='/'
                  className='hover:text-blue-400 transition'
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to='/about'
                  className='hover:text-blue-400 transition'
                >
                  About Us
                </Link>
              </li>

              {/* FIXED SERVICES LINK */}
              <li>
                <Link
                  to='/services'
                  className='hover:text-blue-400 transition'
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to='/contact'
                  className='hover:text-blue-400 transition'
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <p className='text-lg font-bold mb-6 text-white uppercase tracking-wider'>
              Get In Touch
            </p>

            <ul className='flex flex-col gap-4'>

              <li>
                <p className='text-gray-500 text-xs'>Phone</p>

                <a
                  href='tel:+855969249879'
                  className='hover:text-green-400 transition'
                >
                  +855 96 924 9879
                </a>
              </li>

              <li>
                <p className='text-gray-500 text-xs'>Email</p>

                <a
                  href='mailto:xtwo.digitalmarketing@gmail.com'
                  className='hover:text-blue-400 transition'
                >
                  xtwo.digitalmarketing@gmail.com
                </a>
              </li>

              <li>
                <p className='text-gray-500 text-xs'>Location</p>

                <p>Phnom Penh, Cambodia</p>
              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM */}
        <div className='mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3'>

          <p className='text-xs text-gray-500'>
            © {new Date().getFullYear()} SOKBUNTHANH.
            All rights reserved.
          </p>

          <p className='text-xs text-gray-500'>
            Facebook • TikTok • Instagram • YouTube and more
          </p>

        </div>

      </div>

    </footer>

  )
}

export default Footer