import React from "react";
import Home from "./Component/Home";
import Project from "./Component/Project";
import About from "./Component/About";
import Contact from "./Component/Contact";

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
   <div>
      
       <>
       <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
       
       </>
          
       
   </div>
   
    
  );
}

export default App;