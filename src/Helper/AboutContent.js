import React from 'react';
import "../styles/AboutContent.css";
import { Link } from "react-router-dom";
import React1 from "../assets/React1.webp";
import React2 from "../assets/React2.jpg";

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who Am I?</h1>
            <p>Im a react front-end developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact"> 
                <button className='btn'> Contact </button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stact top'>
                    <img src={React1} className='img' alt='true'/>
                </div>
                <div className='img-stact bottom'>
                    <img src={React2} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent