import React from 'react';
import Navbar from '../Helper/Navbar';
import Hero from '../Helper/Hero';
import Work from "../Helper/Work";
import Footer from '../Helper/Footer';

const home = () => {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default home