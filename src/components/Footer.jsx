
// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     // Outer div with a subtle background color and overall padding
//     <div className='bg-gray-50 pt-16 pb-6 text-gray-700'>
//       <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
//         {/* Main Footer Content Grid */}
//         <div className='flex flex-col md:grid md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8 text-sm'>
          
//           {/* Column 1: Logo and About/Social */}
//           <div className='col-span-1 md:col-span-2'>
//             <img src={assets.logo} className='mb-5 w-36 cursor-pointer' alt="Logo"/>
//             <p className='w-full md:w-3/4 text-gray-600 leading-relaxed mb-6'>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, expedita? Magni dolor odio molestias sapiente ex vero porro maxime aut.
//             </p>
            
//             {/* Social Media Icons (Assuming you have icons in assets like assets.facebook_icon) */}
//              <div className='flex gap-4'>
  
//                   <a href="https://www.facebook.com/share/17gbFQDgjE/" target="_blank" rel="noopener noreferrer">
//                     <img src={assets.facebook_icon} alt="Facebook" className='w-6 h-6 hover:opacity-70 transition duration-300' />
//                   </a>

//                   <a href="https://t.me/x2didgitalmarketing" target="_blank" rel="noopener noreferrer">
//                     <img src={assets.telegram_icon} alt="Telegram" className='w-6 h-6 hover:opacity-70 transition duration-300' />
//                   </a>

//                   <a href="tel:+855969249879">
//                     <img src={assets.telephone_icon} alt="Phone" className='w-6 h-6 hover:opacity-70 transition duration-300' />
//                   </a>

//             </div>
//           </div>
          
//           {/* Column 2: Company Links */}
//           <div>
//             <p className='text-lg font-semibold mb-6 text-gray-800 uppercase tracking-wider'>COMPANY</p>
//             <ul className='flex flex-col gap-3 text-gray-600'> 
//               <li className='cursor-pointer hover:text-orange-500 transition duration-300'>Home</li>
//               <li className='cursor-pointer hover:text-orange-500 transition duration-300'>About Us</li>
//               <li className='cursor-pointer hover:text-orange-500 transition duration-300'>Delivery</li>
//               <li className='cursor-pointer hover:text-orange-500 transition duration-300'>Privacy Policy</li>
//             </ul>
//           </div>
          
//           {/* Column 3: Quick Links (New Column) */}
//            <div>
//             <p className='text-lg font-semibold mb-6 text-gray-800 uppercase tracking-wider'>QUICK LINKS</p>
//             <ul className='flex flex-col gap-3 text-gray-600'> 
//               <li className='cursor-pointer hover:text-orange-500 transition duration-300'>Careers</li>
//               <li className='cursor-pointer hover:text-orange-500 transition duration-300'>Blog</li>
//               <li className='cursor-pointer hover:text-orange-500 transition duration-300'>Help Center</li>
//               <li className='cursor-pointer hover:text-orange-500 transition duration-300'>Testimonials</li>
//             </ul>
//           </div>

//           {/* Column 4: Get In Touch */}
//           <div>
//             <p className='text-lg font-semibold mb-6 text-gray-800 uppercase tracking-wider'>GET IN TOUCH</p>
//             <ul className='flex flex-col gap-3 text-gray-600'>
//               <li className='flex items-center gap-2'>
//                 {/* Assuming a phone icon is available in assets */}
//                 <span className='hover:text-orange-500 transition duration-300'>+855 98 765 4321</span>
//               </li>
//               <li className='flex items-center gap-2'>
//                 {/* Assuming an email icon is available in assets */}
//                 <span className='hover:text-orange-500 transition duration-300'>bonthanhfc10@gmail.com</span>
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* Footer Separator and Copyright */}
//         <div className='mt-12 pt-6 border-t border-gray-200'>
//           <p className='text-xs text-center text-gray-500'>
//             &copy; {new Date().getFullYear()} SOKBUNTHANH. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-gray-300 pt-16 pb-6 mt-16'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>

          <div className='md:col-span-2'>
            <img src={assets.logo} className='mb-5 w-36 bg-white p-2 rounded-xl' alt="Logo" />

            <p className='w-full md:w-3/4 leading-relaxed mb-6 text-gray-400'>
              X2 Digital Marketing helps businesses grow online with Facebook, TikTok, Instagram, YouTube marketing, creative content, branding, and smart advertising.
            </p>

            <div className='flex gap-4'>
              <a href="https://www.facebook.com/share/17gbFQDgjE/" target="_blank" rel="noopener noreferrer" className='bg-white/10 p-3 rounded-full hover:bg-blue-600 transition'>
                <img src={assets.facebook_icon} alt="Facebook" className='w-5 h-5' />
              </a>

              <a href="https://t.me/x2didgitalmarketing" target="_blank" rel="noopener noreferrer" className='bg-white/10 p-3 rounded-full hover:bg-sky-500 transition'>
                <img src={assets.telegram_icon} alt="Telegram" className='w-5 h-5' />
              </a>

              <a href="tel:+855969249879" className='bg-white/10 p-3 rounded-full hover:bg-green-600 transition'>
                <img src={assets.telephone_icon} alt="Phone" className='w-5 h-5' />
              </a>
            </div>
          </div>

          <div>
            <p className='text-lg font-bold mb-6 text-white uppercase tracking-wider'>
              Company
            </p>

            <ul className='flex flex-col gap-3'>
              <li><Link to='/' className='hover:text-blue-400 transition'>Home</Link></li>
              <li><Link to='/about' className='hover:text-blue-400 transition'>About Us</Link></li>
              <li><Link to='/collection' className='hover:text-blue-400 transition'>Services</Link></li>
              <li><Link to='/contact' className='hover:text-blue-400 transition'>Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className='text-lg font-bold mb-6 text-white uppercase tracking-wider'>
              Get In Touch
            </p>

            <ul className='flex flex-col gap-4'>
              <li>
                <p className='text-gray-500 text-xs'>Phone</p>
                <a href='tel:+855969249879' className='hover:text-green-400 transition'>
                  +855 96 924 9879
                </a>
              </li>

              <li>
                <p className='text-gray-500 text-xs'>Email</p>
                <a href='mailto:xtwo.digitalmarketing@gmail.com' className='hover:text-blue-400 transition'>
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

        <div className='mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3'>
          <p className='text-xs text-gray-500'>
            © {new Date().getFullYear()} SOKBUNTHANH. All rights reserved.
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