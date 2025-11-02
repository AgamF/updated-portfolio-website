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
        <p style={uniqueParagraphStyle}>Hi, I’m Agam Farajpur, a 21 year-old Web Developer and Junior Software Engineer based in Israel.
            I have a strong foundation in Python and full-stack web development using HTML, CSS, and JavaScript, with experience across multiple frameworks and technologies.
            Over the past few years, I’ve built and maintained numerous projects on GitHub, focusing on clean code, scalability, and performance.
            My technical background also includes exposure to DevOps practices, automation, and cloud deployment, which I’m actively expanding toward a professional DevOps career.
            I’m a CS50 (Harvard/edX) and Zero to Mastery Academy graduate, passionate about continuous learning, problem-solving, and building practical, real-world solutions through code.
        </p>
        <form method="get" action="Agam Farajpur CV.pdf">
          <button className="menu-btn" type="submit">My Resume</button>
        </form>
      </div>
      <ParticlesComponent/>
    </Fragment>
  );

}

