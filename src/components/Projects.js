import React from 'react';
import { projectData } from './ProjectData';
import '../styles/Projects.css';
import 'animate.css';

const cardClass = 'animate__animated animate__fadeInUp project-wrapper';
const text = `Some of my front-end web-dev projects, 
unfortunately the back-end and full-stack projects aren't on air/hosted anywhere,
but they are on my github page.`

const Projects = ({ state }) => {
  const paragraphStyles = {
    color: (state.mode === 'light' ? 'black' : 'white'),
    textAlign: 'center',
    fontSize: '18px'
  }
  const cardStyles = {
    background: (state.mode === 'light') ? 
    'linear-gradient(to bottom, black, transparent)' : 
    'linear-gradient(to bottom, white, transparent)'
  }
  return (
    <div>
      <p style={paragraphStyles}>{text}</p>
      <div className={cardClass}>
        {projectData.map(project => (
          <div 
            style={cardStyles} className='card' 
            key={project.key}>
            <a href={project.link}>
              <img alt='' src={project.src}></img>
              <p style={paragraphStyles}>{project.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;