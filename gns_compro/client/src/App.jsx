import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
