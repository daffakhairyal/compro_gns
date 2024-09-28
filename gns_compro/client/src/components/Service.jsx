import React from 'react';
import Slider from 'react-slick';

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className='p-5 md:p-10 bg-gray-50'>
      <h2 className='text-5xl font-bold text-center mb-10 '>Our Services</h2>

      {/* Carousel Section */}
      <div className='mb-10'>
        <Slider {...settings}>
          <div>
            <img src='https://picsum.photos/1920/400?random=1' alt='Slide 1' className='w-full h-96 object-cover' />
          </div>
          <div>
            <img src='https://picsum.photos/1920/400?random=2' alt='Slide 2' className='w-full h-96 object-cover' />
          </div>
          <div>
            <img src='https://picsum.photos/1920/400?random=3' alt='Slide 3' className='w-full h-96 object-cover' />
          </div>
        </Slider>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-6'>
        
        {/* Waste Management Service */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
          <img src='https://picsum.photos/400/250?random=4' alt='Waste Management' className='w-full h-64 object-cover' />
          <div className='p-5'>
            <h3 className='text-xl font-semibold  mb-2'>Pengelolaan Limbah</h3>
            <p className='text-gray-700 text-sm'>
              Kami menyediakan solusi pengelolaan limbah yang efisien dan ramah lingkungan, membantu menjaga kebersihan dan kesehatan masyarakat.
            </p>
          </div>
        </div>

        {/* Livestock Feed Trading Service */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
          <img src='https://picsum.photos/400/250?random=5' alt='Livestock Feed Trading' className='w-full h-64 object-cover' />
          <div className='p-5'>
            <h3 className='text-xl font-semibold  mb-2'>Perdagangan Pakan Ternak</h3>
            <p className='text-gray-700 text-sm'>
              Menyediakan berbagai jenis pakan ternak berkualitas tinggi untuk memastikan kesehatan dan produktivitas hewan peliharaan dan ternak Anda.
            </p>
          </div>
        </div>

        {/* Gold Trading Service */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
          <img src='https://picsum.photos/400/250?random=6' alt='Gold Trading' className='w-full h-64 object-cover' />
          <div className='p-5'>
            <h3 className='text-xl font-semibold  mb-2'>Perdagangan Emas</h3>
            <p className='text-gray-700 text-sm'>
              Kami menawarkan berbagai produk emas berkualitas, dengan layanan terbaik untuk memenuhi kebutuhan investasi dan perhiasan Anda.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;
