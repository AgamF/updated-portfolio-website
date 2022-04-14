import React from 'react';
import '../styles/Buttons.css';
import 'animate.css';

const ButtonContainer = ({ state, changeRoute, changeTheme }) => {
  const buttonStyles = { 
    color: (state.mode === 'light' ? "black" : "white"),
    border: (state.mode === 'light' ? "2px solid black" : "2px solid white")
  }
  return (
    <div className='button-container animate__animated animate__fadeInUp'>
      { 
        // Ternary expression
        state.route === 'home' ? 
        <button id='emoji' style={buttonStyles} onClick={() => changeTheme()}>
          { state.mode === 'light' ? '🌙' : '🌞' }
        </button> : 
        <button id='home' style={buttonStyles} onClick={() => changeRoute('home')}>Home</button> 
      }
      <button style={buttonStyles} onClick={() => changeRoute('skillset')}>My Skillset</button>
      <button style={buttonStyles} onClick={() => changeRoute('projects')}>My Projects</button>
      <button style={buttonStyles} onClick={() => changeRoute('about')}>About me</button>
    </div>
  )
}

export default ButtonContainer;