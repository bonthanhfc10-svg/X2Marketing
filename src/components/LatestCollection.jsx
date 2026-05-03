// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {

//     const { products }= useContext(ShopContext);
//     const [latestProduct,setLatestProduct] = useState([]);

//     useEffect(()=>{ 
//       setLatestProduct(products.slice(0,10));
//     },[])
//     //  console.log(products);

//   return (
    
//     <div className='my-10'>
//       <div className='text-center py-8 text-3xl'>
//         <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//       </div>

//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {latestProduct.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default LatestCollection

import React from 'react'
import Title from './Title'

const LatestCollection = () => {

  const services = [
    {
      title: 'Facebook Marketing',
      desc: 'Grow your page, boost posts, run ads, and reach real customers.'
    },
    {
      title: 'TikTok Promotion',
      desc: 'Create viral short videos and promote your brand to young audiences.'
    },
    {
      title: 'Instagram Branding',
      desc: 'Build a clean profile, reels, stories, and attractive content.'
    },
    {
      title: 'YouTube Growth',
      desc: 'Video strategy, thumbnails, channel branding, and promotion.'
    },
    {
      title: 'Paid Ads',
      desc: 'Smart Facebook, TikTok, and Google ads for more sales.'
    },
    {
      title: 'Content Design',
      desc: 'Posters, banners, product designs, captions, and campaigns.'
    },
  ]

  return (
    <div className='my-16'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'OUR'} text2={'SERVICES'} />
        <p className='text-gray-500 text-sm mt-3'>
          Digital marketing solutions for modern brands
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((item, index) => (
          <div 
            key={index}
            className='bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300'
          >
            <div className='w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold mb-5'>
              {index + 1}
            </div>

            <h3 className='text-xl font-bold text-gray-800 mb-3'>
              {item.title}
            </h3>

            <p className='text-gray-500 leading-relaxed'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestCollection