import React from 'react';

import Navbar from '../Helper/Navbar';
import Footer from '../Helper/Footer';
import Hero1 from '../Helper/Hero1';
import AboutContent from '../Helper/AboutContent';

const About = () => {
  return (
    <div> 
      <Navbar/>
      <Hero1 heading="ABOUT." text="Im a friendly Front-End Developer "/>
      <AboutContent/>
    <Footer/>
    </div>
  )
}

export default About