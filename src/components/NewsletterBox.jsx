// import React from 'react'

// const NewsletterBox = () => {

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//   }

//   return (
//     <div className='text-center'>
//       <p className='text-2xl font-medium text-gray-800'>
//         Subscribe Now & get 20% off
//       </p>

//       <p className='text-gray-400 mt-3'>lorem10</p>

//       <form
//         onSubmit={onSubmitHandler}
//         className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
//       >
//         <input
//           className='w-full sm:flex-1 outline-none'
//           type="email"
//           placeholder='Enter your Email'
//           required
//         />

//         <button
//           type='submit'
//           className='bg-black text-white text-xs px-10 py-4'
//         >
//           SUBSCRIBE
//         </button>
//       </form>
//     </div>
//   )
// }

// export default NewsletterBox
import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className='text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl py-14 px-6 my-12'>
      
      <p className='text-3xl font-bold'>
        Get Free Marketing Tips
      </p>

      <p className='text-blue-100 mt-3'>
        Subscribe and receive social media growth ideas for your business.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-8 bg-white rounded-full p-2'
      >
        <input
          className='w-full outline-none px-4 text-gray-700'
          type="email"
          placeholder='Enter your email'
          required
        />

        <button
          type='submit'
          className='bg-black text-white text-xs px-8 py-4 rounded-full hover:bg-gray-800'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox