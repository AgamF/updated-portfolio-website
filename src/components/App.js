import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import { params } from './Particles';
import HeroSection from './HeroSection';
import ButtonContainer from './Buttons';
import Links from './Links';
import Skillset from './Skillset';
import Projects from './Projects';
import 'animate.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      mode: 'dark'
    }
  }

  changeTheme = () => {
    if (this.state.mode === 'dark') {
      document.body.style.background = 'white';
      this.setState({ mode: 'light' });
    } else {
      document.body.style.background = 'black';
      this.setState({ mode: 'dark' });
    }
  }

  particlesInit = () => {}
  particlesLoaded = () => {}

  changeRoute = (route) => this.setState({ route: route });

  onRouteChange = () => {
    const { route, mode } = this.state;
    const headingStyles = {
      color: (mode === 'light' ? 'black' : 'white'),
      fontSize: '40px'
    }
    const paragraphStyles = {
      color: (mode === 'light' ? 'black' : 'white'),
      textAlign: 'center',
      fontSize: '20px',
      wordWrap: 'break-word'
    }
    if (route === 'home') {
      return (
        <div>
          <Particles
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={params}/>
          <HeroSection state={this.state}/>
          <ButtonContainer
           state={this.state}
           changeTheme={this.changeTheme}
           changeRoute={this.changeRoute}
          />
          <Links />
        </div>
      );
    }
    if (route === 'skillset') {
      return (
        <div>
          <Particles
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={params}/>
          <h1 style={headingStyles}>My Skillset</h1>
          <Skillset state={this.state}/>
          { window.scrollTo(0, 1400) }
          <ButtonContainer
           state={this.state}
           changeTheme={this.changeTheme}
           changeRoute={this.changeRoute}
          />
          <Links/>
        </div>
      )
    }
    if (route === 'projects') {
      return (
        <div>
          <Particles
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={params}/>
          <h1 style={headingStyles}>My projects</h1>
          <Projects state={this.state}/>
          <ButtonContainer
           state={this.state}
           changeTheme={this.changeTheme}
           changeRoute={this.changeRoute}
          />
          <Links/>
        </div>
      )
    }
    if (route === 'about') {
      return (
        <div>
          <Particles
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={params}/>
          <h1 style={headingStyles}>About me</h1>
          <div>
            <p className='animate__animated animate__fadeInUp' style={paragraphStyles}>Hello! My name is Agam, but i guess you figured that out already. <br/>
              I'm a 17 year old self-taught full-stack web developer and i live in Israel. <br/>
              My hobbies are coding & programming, especially in Python and Javascript. <br/>
              I've started web development well-over a year <br/>
              ago and general purpose programming + software engineering about half-a year ago. <br/>
              I write code in about 7 different languages and <br/> 
              i use many different tools and technologies in the web development industry, <br/> 
              which you can read more about by clicking the "My skillset" button. <br/>
              Aside from coding, i love playing chess, reading books, working out in the gym and going out to explore nature. <br/>
              I believe in hard-work and digilency, humility and perserverance. <br/>
              If there's anything that im passionate about is getting into the hi-tech industry and make it big time. <br/>
              console.log("That's all from me! 🔥"); <br/><br/>
              Contact me: <br/>
              💌 My Email - agam123theking@gmail.com <br/>
              🔵 My Discord - ADAPT#2041
            </p>
          </div>
          <ButtonContainer
           state={this.state}
           changeTheme={this.changeTheme}
           changeRoute={this.changeRoute}
          />
          <Links/>
        </div>
      )
    }
  }

  render() {
    return this.onRouteChange();
  }
}

export default App;