import React from 'react';
import {FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                   <FaHome size={20} style={{ color: "white", marginRight: "2rem" }}/>
                   <div>
                        <p>S1, Raju Flats,</p>
                         <p> chennai.</p>  
                   </div>
                    
                </div>
                <div className='phone'>
                <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }}/>
                    95871-77892</h4>
                </div>
                <div className='email'>
                <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }}/>
                    sharma@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
            <h4>About</h4>
                <h4>Detail-oriented web developer with a passion for creating efficient and user-friendly websites. Proficient in React.js and JavaScript. Strong problem-solving skills and a collaborative team player.</h4>
                <div className='social'>
                     <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }}/>
                     <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }}/>
                     <FaInstagram size={30} style={{ color: "white", marginRight: "1rem" }}/>

                </div>
            </div>
               
        </div>
    </div>
  )
}

export default Footer