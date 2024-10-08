import React, { useEffect, useState } from 'react';
import { AiOutlineRocket } from 'react-icons/ai';
import { FaLeaf } from 'react-icons/fa';
import { GiEcology, GiHamburgerMenu } from 'react-icons/gi';
import { MdGavel } from 'react-icons/md';
import SustainabilitySolutions from './SustainabilitySolutions';
import ProjectsSection from './ProjectSection';
import TentangGNS from './TentangGNS';
import KeunggulanGNS from './KeunggulanGNS';
import PenghargaanSertifikasi from './PenghargaanSertifikasi';
import KontakDanLokasi from './KontakDanLokas';
import OurTeam from './OurTeam';
import AboutUs from './AboutUs';

const images = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(intervalId); // Membersihkan interval saat komponen unmount
  }, []);

  return (
    <section className=''>
    <section className='relative  w-full overflow-hidden'>
      {/* Navbar Hero starts */}
      <div className='hidden  justify-center items-center shadow-md shadow-black/50 md:flex gap-x-6 z-20 bg-black text-white px-5 py-7'>
        <a href="#about" className='px-5 duration-500 hover:scale-125 hover:text-yellow-500'>ABOUT</a>
        <a href="" className='px-5 duration-500 hover:scale-125 hover:text-yellow-500'>SERVICE</a>
        <a href="#" className='flex items-center duration-500 hover:scale-125 hover:text-yellow-500'><GiEcology className='text-3xl mx-2 text-yellow-700' /><p className='text-xl font-semibold'>GNS</p></a>
        <a href="" className='px-5 duration-500 hover:scale-125 hover:text-yellow-500'>PROJECT</a>
        <a href="" className='px-5 duration-500 hover:scale-125 hover:text-yellow-500'>CONTACT</a>
      </div>
      {/* Navbar Hero ends */}

      {/* Image Section starts */}
      {images.map((image, index) => (
        <div key={index} className={`absolute h-full w-full transition-opacity duration-500 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={image} 
            className='h-full w-full object-cover' 
            alt="" 
          />
          {/* Overlay untuk efek gelap */}
          <div className='absolute inset-0 bg-black opacity-40' />
        </div>
      ))}
      {/* Image Section ends */}

      {/* Hero Section starts */}
      <div className='sticky flex flex-col justify-center items-center h-screen gap-y-6 z-10 p-5'>
        <h1 className='text-slate-300 tracking-wider'>DON'T LOOK FURTHER, HERE IS THE KEY</h1>
        <h1 className='text-slate-200 text-3xl md:text-6xl font-bold'>We’re Eco-Friendly Waste Management</h1> 
        <h1 className='text-slate-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus ab natus nobis 
          dolore ex tempore facere debitis in! Fuga?</h1> 
          <a href='#about' className='rounded-xl shadow shadow-black/25 bg-yellow-500 duration-500 hover:bg-black hover:text-white py-3 px-5 text-lg font-semibold'>Getting Started</a>
      </div>
      {/* Hero Section ends */}

    </section>
    <section>
      <AboutUs/>
    </section>
    <section>
      <OurTeam/>
    </section>
    <section>
      <KeunggulanGNS/>
    </section>
    <section>
      <PenghargaanSertifikasi/>
    </section>
    <section>
      <KontakDanLokasi/>
    </section>
    </section>
  );
}

export default Hero;
