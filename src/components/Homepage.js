import React from 'react'
import Header from "./Header.js";
import Hero from "./Hero.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Education from "./Education.js";
import Projects from "./Projects.js";
import Interests from "./Interests.js";
import Footer from "./Footer.js";
import "../App.css";
import SocialLinks from './SocialLinks.js';
import Contact from './Contact.js';
import Workexp from './Workexp.js';


const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Workexp />
      <Projects />
      <Interests />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage
