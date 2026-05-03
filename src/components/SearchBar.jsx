// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import { useLocation } from 'react-router-dom';

// const SearchBar = () => {
//     const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
//     const [visible,setVisible] = useState(false);
//     const location = useLocation();

//     useEffect(()=>{
//         // console.log(location.pathname);
//         if(location.pathname.includes('collection') )
//         {
//             setVisible(true)
//         }
//         else{
//             setVisible(false)
//         }
//     },[location])

//   return showSearch && visible ? (
//     <div className='border-t border-b bg-gray-50 text-center '>
//         <div className='inline-flex items-center  justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
//             <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
//             <img className='w-4' src={assets.search_icon} alt=""/>
//         </div>
//         <img onClick={()=>setShowSearch(false)} className=' inline w-3 cursor-pointer' src={assets.cross_icon} alt=""/>


//     </div>
//   ) : null
// }

// export default SearchBar

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-center py-6'>

      <div className='flex items-center justify-center gap-3'>

        {/* Search Box */}
        <div className='flex items-center w-11/12 sm:w-2/3 lg:w-1/2 bg-white rounded-full px-5 py-3 shadow-md border border-gray-200'>

          <img className='w-4 mr-3 opacity-70' src={assets.search_icon} alt="search" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='flex-1 outline-none text-sm bg-transparent'
            type="text"
            placeholder='Search products, services, marketing...'
          />

          {search && (
            <button
              onClick={() => setSearch('')}
              className='text-xs text-gray-400 hover:text-red-500'
            >
              Clear
            </button>
          )}

        </div>

        {/* Close Button */}
        <button
          onClick={() => setShowSearch(false)}
          className='bg-white p-3 rounded-full shadow hover:bg-red-500 hover:text-white transition'
        >
          <img className='w-3' src={assets.cross_icon} alt="close" />
        </button>

      </div>

      {/* 🔥 Optional Suggestions (cool UX) */}
      <div className='mt-4 flex flex-wrap justify-center gap-2 text-xs'>
        {['Facebook Ads', 'TikTok Growth', 'Instagram Branding', 'YouTube Marketing'].map((item, i) => (
          <button
            key={i}
            onClick={() => setSearch(item)}
            className='bg-white px-3 py-1 rounded-full border hover:bg-blue-600 hover:text-white transition'
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  ) : null
}

export default SearchBar