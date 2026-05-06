// Navbar.jsx

import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [visible, setVisible] = useState(false)

  const { setShowSearch } = useContext(ShopContext)

  return (

    <div className='flex items-center justify-between py-5 font-medium'>

      {/* LOGO */}
      <Link to='/'>
        <img src={assets.logo} className='w-36' alt='' />
      </Link>

      {/* DESKTOP MENU */}
      <ul className='hidden sm:flex gap-7 text-sm'>

        {/* HOME */}
        <NavLink
          to='/'
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? 'text-blue-600' : 'text-gray-700'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>HOME</p>

              <hr
                className={`w-2/4 border-none h-[2px] bg-blue-600 ${
                  isActive ? 'block' : 'hidden'
                }`}
              />
            </>
          )}
        </NavLink>

        {/* SERVICES */}
        <NavLink
          to='/services'
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? 'text-blue-600' : 'text-gray-700'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>SERVICES</p>

              <hr
                className={`w-2/4 border-none h-[2px] bg-blue-600 ${
                  isActive ? 'block' : 'hidden'
                }`}
              />
            </>
          )}
        </NavLink>

        {/* ABOUT */}
        <NavLink
          to='/about'
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? 'text-blue-600' : 'text-gray-700'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>ABOUT</p>

              <hr
                className={`w-2/4 border-none h-[2px] bg-blue-600 ${
                  isActive ? 'block' : 'hidden'
                }`}
              />
            </>
          )}
        </NavLink>

        {/* CONTACT */}
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? 'text-blue-600' : 'text-gray-700'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>CONTACT</p>

              <hr
                className={`w-2/4 border-none h-[2px] bg-blue-600 ${
                  isActive ? 'block' : 'hidden'
                }`}
              />
            </>
          )}
        </NavLink>

      </ul>

      {/* RIGHT SIDE */}
      <div className='flex items-center gap-6'>

        {/* SEARCH */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt=''
        />

        {/* MOBILE MENU BUTTON */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt=''
        />

      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${
          visible ? 'w-full' : 'w-0'
        }`}
      >

        <div className='flex flex-col text-gray-600'>

          {/* BACK BUTTON */}
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 p-3 cursor-pointer'
          >
            <img
              className='h-4 rotate-180'
              src={assets.dropdown_icon}
              alt=''
            />

            <p>BACK</p>
          </div>

          {/* MOBILE LINKS */}
          <NavLink
            onClick={() => setVisible(false)}
            className='py-3 pl-6 border'
            to='/'
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className='py-3 pl-6 border'
            to='/services'
          >
            SERVICES
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className='py-3 pl-6 border'
            to='/about'
          >
            ABOUT
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className='py-3 pl-6 border'
            to='/contact'
          >
            CONTACT
          </NavLink>

        </div>

      </div>

    </div>

  )
}

export default Navbar