/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import Header from "../components/header";
import ParticlesComponent from "../components/particles";
import skillset from "../data/skillset.json";
import Tilt from "react-tilt";
import icons from "../data/skillset-icons.json";
import BackButton from "../components/backbutton";

export default function SkillsPage() {
  return (
    <Fragment>
      <Header title="Skills"/>
      <BackButton/>
      <h1 id="homepage-title">My skill set:</h1>
      <div id="skillset-wrapper">
        <div id="skillset-icons">
          {icons.map((icon) => (
            <Tilt key={icon}>
              <img src={icon.source} width={icon.width} height={icon.height} />
            </Tilt>
          ))}
        </div>
        <p className="paragraph">Over the course of 3 years, i've learned countless programming languages, <br/> frameworks and technologies that aided me on my developer journey. <br/> Some of them include: </p>
        <ul id="skillset-list">
          {skillset.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </div>
      <ParticlesComponent/>
    </Fragment>
  );
}