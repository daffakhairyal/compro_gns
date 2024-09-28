import React from 'react'
import { GiEcology } from 'react-icons/gi'
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdWeb } from "react-icons/md";


const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-2 p-10 gap-4 bg-black text-white '>
      <div className='flex flex-col gap-y-4'>
      <a href="" className='flex items-center'><GiEcology className='text-6xl mx-2 text-yellow-700' /><p className='text-3xl font-semibold'>GNS</p></a>
      <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, aut fugit veniam magnam tempora quisquam ipsam vero excepturi dolores iste.</p>
      </div>
      <div className='flex flex-col md:flex-row justify-around gap-3 '>
        <div className='flex flex-col  '>
            <h1 className='text-lg text-yellow-700 font-semibold'>Contact</h1>
            <div className='flex gap-x-2 items-center'><MdEmail/><p>info@gns.co.id</p></div>
            <a href='' className='flex gap-x-2 items-center'><RiInstagramFill/><p>@gns.group</p></a>
            <a href='' className='flex gap-x-2 items-center'><FaLinkedin/><p>GNS Group</p></a>
            <a href='' className='flex gap-x-2 items-center'><MdWeb/><p>www.gns-group.com</p></a>
        </div>
        <div className='flex flex-col '>
            <h1 className='text-lg text-yellow-700 font-semibold'>Support</h1>
            <a href='' className='flex gap-x-2 items-center'><p>FAQs</p></a>
            <a href='' className='flex gap-x-2 items-center'><p>Help Center</p></a>
            <a href='' className='flex gap-x-2 items-center'><p>Consult</p></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
