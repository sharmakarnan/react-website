import React from 'react';


import Navbar from '../Helper/Navbar';
import Footer from '../Helper/Footer';
import Hero1 from '../Helper/Hero1';
import Pricingcard from '../Helper/Pricingcard';
import Work from '../Helper/Work';

const Project = () => {
  return (
    <div>
        <Navbar/>
        <Hero1 heading="PROJECTS." text="Some of my most recent work" />
        <Work/>
        <Pricingcard/>
        <Footer/>
    </div>
  )
}

export default Project