import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <div className='h-screen'></div>
    </div>
  )
}

export default App
