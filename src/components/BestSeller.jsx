// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const BestSeller = () => {

//     const {products} = useContext(ShopContext);
//     const [bestSeller,setBestSeller] = useState([]);
//     useEffect(()=>{
//         const bestProduct = products.filter((item)=>(item.bestseller));
//         setBestSeller(bestProduct.slice(0,5))
//     },[])
//   return (
//  <div className='my-10'>
//       <div className='text-center text-3xl py-8'>
//         <Title text1={'BEST'} text2={'SELLERS'} />
//       </div>

//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {bestSeller.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             name={item.name}
//             image={item.image}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default BestSeller

import React from 'react'
import Title from './Title'

const BestSeller = () => {

  const packages = [
    {
      name: 'Starter',
      price: '$49',
      desc: 'Best for small pages starting social media.'
    },
    {
      name: 'Growth',
      price: '$99',
      desc: 'Content, ads setup, and monthly strategy.'
    },
    {
      name: 'Pro Brand',
      price: '$199',
      desc: 'Full marketing support for serious businesses.'
    },
  ]

  return (
    <div className='my-16 bg-gray-50 rounded-3xl py-12 px-6'>
      <div className='text-center text-3xl py-6'>
        <Title text1={'MARKETING'} text2={'PACKAGES'} />
        <p className='text-gray-500 text-sm mt-3'>
          Choose the best plan for your business growth
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {packages.map((item, index) => (
          <div 
            key={index}
            className='bg-white rounded-3xl p-8 text-center shadow-sm border hover:shadow-xl transition duration-300'
          >
            <h3 className='text-2xl font-bold text-gray-800'>
              {item.name}
            </h3>

            <p className='text-4xl font-bold text-blue-600 my-5'>
              {item.price}
            </p>

            <p className='text-gray-500 mb-6'>
              {item.desc}
            </p>

            <button className='bg-black text-white px-8 py-3 rounded-full hover:bg-blue-600 transition'>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestSeller