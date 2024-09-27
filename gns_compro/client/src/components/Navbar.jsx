import React, { useState, useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiEcology } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mobile menu
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false); // State untuk collapsible Contact menu

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10;

      if (window.scrollY > scrollThreshold) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fungsi untuk toggle contact menu
  const toggleContactMenu = () => {
    setIsContactMenuOpen(!isContactMenuOpen);
  };

  // Fungsi untuk menutup menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsContactMenuOpen(false); // Menutup contact menu juga
  };

  return (
    <div>
      <nav className={`fixed shadow shadow-black/25 top-0 right-0 left-0 navbar z-30 ${isActive ? 'active' : ''}`}>
        {/* Contact Section starts */}
        <div className='hidden md:flex items-center justify-around bg-black text-white p-2'>
          <div className='flex gap-x-5'>
            <a href="" className='hover:text-yellow-500 duration-300'><FaFacebookF /></a>
            <a href="" className='hover:text-yellow-500 duration-300'><RiInstagramFill /></a>
            <a href="" className='hover:text-yellow-500 duration-300'><IoLogoWhatsapp /></a>
          </div>
          <div className='flex gap-x-5'>
            <p className='hover:bg-yellow-500 duration-300 px-2'>+62-858-4140-0449</p>
            <p className='hover:bg-yellow-500 duration-300 px-2'>info@gns.co.id</p>
          </div>
        </div>
        {/* Contact Section ends */}

        {/* Navbar Desktop Section starts */}
        <div className='hidden md:flex items-center justify-around bg-white py-5 px-2'>
          <a href="" className='flex items-center'><GiEcology className='text-3xl mx-2 text-yellow-700' /><p className='text-xl font-semibold'>GNS</p></a>
          <div className='flex gap-x-6 text-sm'>
            <a href=""><p>HOME</p></a>
            <a href=""><p>ABOUT</p></a>
            <a href=""><p>SERVICE</p></a>
            <a href=""><p>PROJECTS</p></a>
            <a href=""><p>CONTACT</p></a>
          </div>
        </div>
        {/* Navbar Desktop Section ends */}

        {/* Navbar Mobile Section starts */}
        <div className='flex md:hidden items-center justify-around bg-white py-5 px-2'>
          <a href="" className='flex items-center'><GiEcology className='text-3xl mx-2 text-yellow-700' /><p className='text-xl font-semibold'>GNS</p></a>
          <button className='flex sm:hidden text-2xl' onClick={toggleMenu}><GiHamburgerMenu /></button>
        </div>
        {/* Navbar Mobile Section ends */}
      </nav>

      {/* Overlay */}
      <div className={`fixed h-screen w-full bg-black opacity-50 z-10 ${isMenuOpen ? 'block' : 'hidden'}`} onClick={closeMenu}></div>

      {/* Mobile Menu */}
      <div className={`fixed flex flex-col items-center py-6 gap-y-6 w-1/2 shadow-lg shadow-black top-0 right-0 h-screen bg-slate-100 z-20 nav-mobile ${isMenuOpen ? 'active' : ''}`}>
        <a href=""><p>HOME</p></a>
        <a href=""><p>ABOUT</p></a>
        <a href=""><p>SERVICE</p></a>
        <a href=""><p>PROJECTS</p></a>
        {/* Untuk menu Contact di mobile */}
        <div>
          <button className='flex items-center gap-x-2' onClick={toggleContactMenu}>CONTACT<FaChevronDown className='text-black'/></button>
          <div
            className={`flex flex-col gap-y-5 items-center pt-5 transition-all duration-300 ease-in-out transform ${
              isContactMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <a href="" className='hover:text-yellow-500 duration-300'><FaFacebookF /></a>
            <a href="" className='hover:text-yellow-500 duration-300'><RiInstagramFill /></a>
            <a href="" className='hover:text-yellow-500 duration-300'><IoLogoWhatsapp /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
