/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Fragment } from "react";
import data from "../data/homepage.json";
import ParticlesComponent from "../components/particles";
import Card from "../components/socialcard";
import socials from "../data/socials.json";
import "animate.css";
import Header from "../components/header";

export default function HomePage() {
  return (
    <Fragment>
      <Header title="Home"/>
      <h1 id="homepage-title" className="animate__animated animate__fadeInLeft">Hello!</h1>
      <img alt="click me" onClick={() => alert("Hellooooooooooo!!!")} style={{ display: "block", marginLeft:"auto", marginRight: "auto" }} src="hello.gif"/>
      <p className="subtitle animate__animated animate__fadeIn">My name is Agam Farajpur, i'm a web developer.</p>
      <div id="homepage-hero-section" className="animate__animated animate__fadeInUp">
        {data.map((button) => (
          <Link key={button} href={button.url}>
            <button className="menu-btn">{button.label}</button>
          </Link>
        ))}
      </div>
      <div id="footer">
        <h1 className="subtitle">Follow my socials: </h1>
        <div>
          {socials.map((socialLink) => (
            <Card 
              key={socialLink}
              img={socialLink.src}
              label={socialLink.label}
              link={socialLink.link}  
            />
          ))}
        </div>
      </div>
      <ParticlesComponent/>
    </Fragment>
  );
}