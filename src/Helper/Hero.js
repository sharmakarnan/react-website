import React from 'react';
import "../styles/Hero.css";
import IntroImg from "../assets/into1.jpg";
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='Hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg'/>
        </div>
        <div className='content'>
            <p>HI, I'M A FRESHER.</p>
            <h1>React Developer</h1>
          
            <div>
                <Link to="/Project" className='btn'>Projects</Link>
                <Link to="/Contact" className='btn-lite'>Contact</Link>
            </div>
            </div>
    </div>
  )
}

export default Hero