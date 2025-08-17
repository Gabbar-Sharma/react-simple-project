import './App.css';
import {  HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Header/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Login from './Pages/Login';

import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);
  return (
    
       <Router>
      <Nav />
      <div>
        <Routes>
          <Route
            path="/Home"
            element={
              <>
                <Home />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
   
  );
};

export default App;
