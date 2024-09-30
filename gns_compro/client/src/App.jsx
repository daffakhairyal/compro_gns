import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
