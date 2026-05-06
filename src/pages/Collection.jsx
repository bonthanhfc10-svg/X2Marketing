import React, { useState } from 'react'
import Title from '../components/Title'

const Collection = () => {

  const [activeCategory, setActiveCategory] = useState('All')

  const services = [
    {
      title: 'Facebook Marketing',
      category: 'Social Media',
      price: '$49',
      desc: 'Page growth, content posting, ads setup, and customer engagement.',
      icon: '📘'
    },
    {
      title: 'TikTok Promotion',
      category: 'Social Media',
      price: '$59',
      desc: 'Short video ideas, promotion strategy, and viral brand content.',
      icon: '🎵'
    },
    {
      title: 'Instagram Branding',
      category: 'Branding',
      price: '$69',
      desc: 'Profile design, reels, stories, and visual branding.',
      icon: '📸'
    },
    {
      title: 'YouTube Growth',
      category: 'Video Marketing',
      price: '$89',
      desc: 'Channel branding, thumbnails, and video promotion.',
      icon: '▶️'
    },
    {
      title: 'Paid Ads Management',
      category: 'Ads',
      price: '$99',
      desc: 'Facebook, TikTok, and Google ads for more sales.',
      icon: '🎯'
    },
    {
      title: 'Content Design',
      category: 'Branding',
      price: '$79',
      desc: 'Posters, banners, captions, and campaign designs.',
      icon: '🎨'
    },

    {
      title: 'Logo Design',
      category: 'Branding',
      price: '$39',
      desc: 'Modern logo creation for your business and personal brand.',
      icon: '🔥'
    },
    {
      title: 'Website Design',
      category: 'Development',
      price: '$149',
      desc: 'Professional responsive websites for businesses and brands.',
      icon: '💻'
    },
    {
      title: 'SEO Optimization',
      category: 'Marketing',
      price: '$99',
      desc: 'Improve Google ranking and increase website traffic.',
      icon: '🔍'
    },
    {
      title: 'Google Ads',
      category: 'Ads',
      price: '$120',
      desc: 'Run smart Google advertising campaigns for business growth.',
      icon: '📈'
    },
    {
      title: 'Video Editing',
      category: 'Video Marketing',
      price: '$59',
      desc: 'Professional TikTok, Reels, Shorts, and YouTube editing.',
      icon: '🎬'
    },
    {
      title: 'Thumbnail Design',
      category: 'Video Marketing',
      price: '$25',
      desc: 'High CTR YouTube thumbnails to attract more views.',
      icon: '🖼️'
    },
    {
      title: 'Social Media Management',
      category: 'Social Media',
      price: '$129',
      desc: 'Full management of your social media business accounts.',
      icon: '📱'
    },
    {
      title: 'Brand Strategy',
      category: 'Marketing',
      price: '$199',
      desc: 'Business identity, positioning, and audience strategy.',
      icon: '🚀'
    },
    {
      title: 'Photography',
      category: 'Content',
      price: '$89',
      desc: 'Professional product and business photography services.',
      icon: '📷'
    },
    {
      title: 'Livestream Promotion',
      category: 'Social Media',
      price: '$69',
      desc: 'Boost livestream viewers and engagement on social platforms.',
      icon: '🔴'
    },
    {
      title: 'Copywriting',
      category: 'Marketing',
      price: '$45',
      desc: 'Creative captions, ad copy, and marketing content writing.',
      icon: '✍️'
    },
    {
      title: 'Business Consultation',
      category: 'Marketing',
      price: '$149',
      desc: 'Digital business advice and online growth strategy.',
      icon: '🧠'
    }
  ]

  const categories = [
    'All',
    'Social Media',
    'Branding',
    'Ads',
    'Video Marketing',
    'Marketing',
    'Development',
    'Content'
  ]

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter(item => item.category === activeCategory)

  return (
    <div className='border-t pt-10 px-4 sm:px-8'>

      {/* HEADER */}
      <div className='text-center mb-12'>
        <div className='text-3xl'>
          <Title text1={'OUR'} text2={'SERVICES'} />
        </div>

        <p className='text-gray-500 mt-3 max-w-2xl mx-auto'>
          X2 Marketing helps businesses grow online with social media marketing,
          paid ads, branding, content design, websites, and video promotion.
        </p>
      </div>

      {/* HERO SECTION */}
      <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-14 text-white mb-14 shadow-xl'>

        <p className='text-sm font-semibold text-blue-100'>
          X2 DIGITAL MARKETING
        </p>

        <h1 className='text-3xl sm:text-5xl font-bold mt-4 leading-tight'>
          Grow Your Brand Faster Online
        </h1>

        <p className='text-blue-100 mt-5 max-w-2xl leading-relaxed'>
          We help businesses grow on Facebook, TikTok, Instagram, YouTube,
          Google, and more with creative content and smart digital strategy.
        </p>

        <div className='flex flex-wrap gap-4 mt-8'>

          <a
            href='https://t.me/x2didgitalmarketing'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition'
          >
            Contact Us
          </a>

          <a
            href='https://www.facebook.com/share/17gbFQDgjE/'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition'
          >
            Facebook Page
          </a>

        </div>

      </div>

      {/* CATEGORY FILTER */}
      <div className='flex flex-wrap justify-center gap-3 mb-12'>
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(item)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
              activeCategory === item
                ? 'bg-black text-white'
                : 'bg-white text-gray-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* SERVICES GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>

        {filteredServices.map((item, index) => (

          <div
            key={index}
            className='bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300'
          >

            <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-3xl mb-6 shadow-lg'>
              {item.icon}
            </div>

            <p className='text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide'>
              {item.category}
            </p>

            <h3 className='text-2xl font-bold text-gray-900 mb-3'>
              {item.title}
            </h3>

            <p className='text-gray-500 leading-relaxed mb-7'>
              {item.desc}
            </p>

            <div className='flex items-center justify-between'>

              <p className='text-2xl font-bold text-blue-600'>
                {item.price}
              </p>

              <a
                href='https://t.me/x2didgitalmarketing'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-blue-600 transition'
              >
                Order Now
              </a>

            </div>

          </div>

        ))}

      </div>

      {/* CTA SECTION */}
      <div className='mt-20 bg-gray-900 rounded-3xl text-white text-center py-16 px-6'>

        <p className='text-blue-400 font-semibold'>
          READY TO GROW?
        </p>

        <h2 className='text-3xl sm:text-4xl font-bold mt-4'>
          Let X2 Marketing Build Your Brand
        </h2>

        <p className='text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed'>
          Start your online business growth today with professional digital
          marketing services and creative strategy.
        </p>

        <a
          href='https://t.me/x2didgitalmarketing'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mt-8 bg-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition'
        >
          Start Now
        </a>

      </div>

    </div>
  )
}

export default Collection