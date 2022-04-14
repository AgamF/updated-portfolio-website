import React from 'react';

const HeroSection = ({ state }) => {
  const headingStyles = {
    color: (state.mode === 'light' ? 'black' : 'white')
  }
  return (
    <div id='hero'>
      <h1 style={headingStyles} id='title' className='animate__animated animate__fadeInDown'>Agam Farajpur</h1>
      <h1 style={headingStyles} id='subtitle' className='animate__animated animate__fadeInUp'>Your Full-stack web developer.</h1>
    </div>
  )
}

export default HeroSection;