/* eslint-disable array-callback-return */
import React from 'react';
import { imageData } from './ImageData';
import '../styles/Links.css';
import 'animate.css';

const Links = () => {
  return (
    <div className='links-wrapper animate__animated animate__fadeInUp'>
      {imageData.map(img => (
        <div key={img.key} className='link-div'>
          <a href={img.link}>
          <img  
            alt='' 
            height={img.dimensions} 
            width={img.dimensions} 
            src={img.src}>
          </img>
          <p style={{
            color: (document.body.style.background === 'white' ? "black" : "white"),
            textDecoration: 'none',
            textAlign: 'center'
          }}>{img.title}</p>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Links;