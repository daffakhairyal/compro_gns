import React from 'react'
import { FaLeaf } from 'react-icons/fa';
import { AiOutlineRocket } from 'react-icons/ai';
import { MdGavel } from 'react-icons/md';

const About = () => {
  return (
    <section className='flex flex-col'>
      {/* Header About starts */}
      <div className='gap-y-5 md:px-10 py-10 flex flex-col md:flex-row justify-around bg-black text-white'>
        <div className='gap-y-6 flex flex-col items-center md:w-[300px] p-3 '>
          <div className='p-6 text-4xl bg-green-500  text-white rounded-full duration-500 hover:scale-110'>
            <FaLeaf />
          </div>
          <div className='flex flex-col items-center gap-y-3'>
            <h1 className='text-xl font-semibold'>Eco-Friendly</h1>
            <p className='text-justify text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat exercitationem ipsa facere cumque omnis impedit consectetur dolorem fuga, necessitatibus quos iure ea voluptatem eveniet, rerum est aperiam obcaecati minima! Possimus!
            </p>
          </div>
        </div>
        <div className='gap-y-6 flex flex-col items-center md:w-[300px] p-3'>
          <div className='p-6 text-4xl bg-green-500  text-white rounded-full duration-500 hover:scale-110'>
            <AiOutlineRocket />
          </div>
          <div className='flex flex-col items-center gap-y-3'>
            <h1 className='text-xl font-semibold'>Efficiency</h1>
            <p className='text-justify text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat exercitationem ipsa facere cumque omnis impedit consectetur dolorem fuga, necessitatibus quos iure ea voluptatem eveniet, rerum est aperiam obcaecati minima! Possimus!
            </p>
          </div>
        </div>
        <div className='gap-y-6 flex flex-col items-center md:w-[300px] p-3'>
          <div className='p-6 text-4xl bg-green-500  text-white rounded-full duration-500 hover:scale-110'>
            <MdGavel />
          </div>
          <div className='flex flex-col items-center gap-y-3'>
            <h1 className='text-xl font-semibold'>Compliance</h1>
            <p className='text-justify text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat exercitationem ipsa facere cumque omnis impedit consectetur dolorem fuga, necessitatibus quos iure ea voluptatem eveniet, rerum est aperiam obcaecati minima! Possimus!
            </p>
          </div>
        </div>
      </div>
      {/* Header About ends */}
      {/* About starts */}
      <div>
        <div id='about'></div>
        {/* About Header starts */}
        <div  className='relative p-10 h-[200px] flex items-center justify-center bg-cover bg-center' 
             style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=5)' }}>
          {/* Overlay */}
          <div className='absolute inset-0 bg-black opacity-50'></div>
          {/* Text content */}
          <h1 className='relative text-[75px] font-bold text-white'>
            About Us
          </h1>
        </div>
        {/* About Header ends */}
        {/* About Content starts */}

<div className='p-5 md:p-10 bg-gray-50 rounded-lg shadow-lg'>
  
  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
    <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      <h3 className='text-2xl font-semibold  mb-3'>Vision</h3>
      <p className='text-gray-700 text-sm'>
        Menjadi perusahaan terdepan dalam pengelolaan limbah yang inovatif dan ramah lingkungan di Indonesia.
      </p>
    </div>
    <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      <h3 className='text-2xl font-semibold  mb-3'>Mission</h3>
      <p className='text-gray-700 text-sm'>
        Menyediakan solusi pengelolaan limbah yang efisien, berkelanjutan, dan sesuai dengan standar lingkungan, serta berkontribusi positif kepada masyarakat.
      </p>
    </div>
  </div>

  <div className='bg-white p-6 mt-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
    <h3 className='text-2xl font-semibold  mb-3'>Company Overview</h3>
    <p className='text-gray-700 text-sm'>
      GNS berfokus pada pengelolaan limbah dengan pendekatan berkelanjutan, untuk menjaga kesehatan lingkungan dan meningkatkan kualitas hidup masyarakat.
    </p>
  </div>


</div>


        {/* About Content ends */}
      </div>
      {/* About ends */}
    </section>
  )
}

export default About
