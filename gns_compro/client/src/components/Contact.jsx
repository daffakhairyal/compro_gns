import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-lg text-center mb-12">
          We’d love to hear from you! Get in touch through any of the options below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Address and Map */}
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <h3 className="bg-blue-800 text-white text-xl font-bold p-4">Our Location</h3>
            <p className="p-4">Jl. Raya No. 123, Jakarta, Indonesia</p>
            <div className="h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7756368880133!2d144.96305781531924!3d-37.8141079797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1e09c7%3A0x5045675218ce6e0!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sid!4v1612569468294!5m2!1sen!2sid" 
                className="w-full h-full" 
                allowFullScreen="" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Right Side: Contact Information */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h3 className="bg-blue-800 text-white text-xl font-bold p-4">Get in Touch</h3>
            <div className="mt-4">
              <h4 className="font-semibold">Phone:</h4>
              <p className="text-lg">+62 123 456 789</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Email:</h4>
              <p className="text-lg">info@gns.com</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Follow Us:</h4>
              <div className="flex space-x-4 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <FaFacebook size={30} />
                </a>
                <a href="https://wa.me/62123456789" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition duration-300">
                  <FaWhatsapp size={30} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition duration-300">
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
