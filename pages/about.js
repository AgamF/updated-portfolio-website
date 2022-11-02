/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import Header from "../components/header";
import ParticlesComponent from "../components/particles";
import BackButton from "../components/backbutton";

const uniqueParagraphStyle = {
  lineHeight: "30px",
  fontSize: "18px"
}

export default function AboutPage() {
  return (
    <Fragment>
      <Header title="About"/>
      <BackButton/>
      <h1 id="homepage-title">A little about myself</h1>
      <div id="about-wrapper">
        <img src="me.jpg"/>
        <h1 style={{fontWeight: "200"}}>Yep, that's me.</h1>
        <p style={uniqueParagraphStyle}>Hi! My name is Agam and i'm an 18 year old web-developer and software engineer based in Israel. <br/>
        I learned Python programming about 3 years ago and web-development with HTML, CSS & Javascript about 2 years ago. <br/>
        Ever since then i proceeded to enrich my knowledge even more by learning a vast amount of frameworks, technologies, <br/>
        programming languages, concepts, methodologies and so much more.<br/><br/>

        I'm a High-school graduate aswell as a CS50 edx graduate and a ZeroToMastery academy graduate.<br/>
        As of 25th of January, 2022, I will serve in the military as a Naval warrior as part of a mandatory 3 year service.<br/><br/>

        As of october 2022, I became proficient at 7 programming languages & have over 12 maintained projects on Github, <br/> and I came to an understanding that i love programming and that i am very passionate <br/>
        about problem-solving. Gym is essential, Chess is for life ♥. <br/><br/>
        </p>
        <form method="get" action="Agam Farajpur CV.pdf">
          <button className="menu-btn" type="submit">My Resume</button>
        </form>
      </div>
      <ParticlesComponent/>
    </Fragment>
  );
}