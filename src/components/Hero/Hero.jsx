import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <h2>HELLO WORLD! 
      <br/> I'M KAVERI ANAPAREDDY</h2>
    <p>A WEB DEVELOPER TRANSFORMING IDEAS INTO DIGITAL REALITY</p>
    <div className="hero-buttons">
      <a href="#projects" className="btn">View Projects</a>
      <a href="#contact" className="btn secondary">Contact Me</a>
    </div>
  </section>
);

export default Hero;
