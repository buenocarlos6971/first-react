
import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/video-12.mp4' autoPlay loop muted />
      <h1>Carlos Bueno</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Message Me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;