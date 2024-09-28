import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-10 bg-indigo-900 text-white'>
        <div className='flex flex-col px-3 py-10 gap-y-4'>
          <h1 className='text-6xl font-semibold'>Get in Touch</h1>
          <p className='text-left text-slate-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam ducimus? Earum facere soluta esse? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, provident?
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-3 py-10'>
        <div className='flex flex-col p-3 gap-y-4'>
            <FaMapLocationDot className='bg-green-400 shadow-sm shadow-black p-3 rounded-md text-black text-5xl' />
            <h1 className='font-semibold'>Our Address</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='flex flex-col p-3 gap-y-4'>
            <FaPhoneAlt className='bg-green-400 shadow-sm shadow-black p-3 rounded-md text-black text-5xl' />
            <h1 className='font-semibold'>Our Contact Info</h1>
            <p>+62-858-4140-0449</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[600px]"> {/* Atur lebar dan tinggi di sini */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.395833359589!2d106.79698951038617!3d-6.597628893368608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c412a67abb%3A0x75f23c6b45a37ee5!2sBogor%20Botanical%20Gardens!5e0!3m2!1sen!2sid!4v1727533730693!5m2!1sen!2sid"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Konten tambahan setelah Google Maps */}
<div className="p-10 bg-indigo-900 text-white">
  <h2 className="text-4xl font-bold mb-6 text-center">We'd Love to Hear From You</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
    {/* Konten kiri */}
    <div className="space-y-6">
      <p className="text-lg">
        Whether you're curious about our services, have a question, or need support, feel free to reach out to us.
      </p>
      <ul className="space-y-4">
        <li className="flex items-center gap-4">
          <FaPhoneAlt className="text-green-500 text-3xl" />
          <div>
            <h3 className="font-semibold text-xl">Phone Support</h3>
            <p className="">+62-858-4140-0449 (Available 24/7)</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <FaMapLocationDot className="text-blue-500 text-3xl" />
          <div>
            <h3 className="font-semibold text-xl">Our Address</h3>
            <p className="">1234 Main St, Bogor, West Java</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zM4 11v4c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-4c0-1.104-.896-2-2-2H6c-1.104 0-2 .896-2 2z" />
          </svg>
          <div>
            <h3 className="font-semibold text-xl">Email Us</h3>
            <p className="">info@example.com</p>
          </div>
        </li>
      </ul>
    </div>

    {/* Konten kanan */}
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Operating Hours</h3>
      <ul className="space-y-4 text-gray-600">
        <li className="flex justify-between border-b pb-2">
          <span>Monday - Friday</span>
          <span>9:00 AM - 5:00 PM</span>
        </li>
        <li className="flex justify-between border-b pb-2">
          <span>Saturday</span>
          <span>9:00 AM - 3:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span>Sunday</span>
          <span>Closed</span>
        </li>
      </ul>
      <p className="mt-6 text-center text-sm text-slate-500">
        We look forward to assisting you!
      </p>
    </div>
  </div>
</div>
    </section>
  );
}

export default Contact;
