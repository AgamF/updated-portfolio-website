/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import Header from "../components/header";
import ParticlesComponent from "../components/particles";
import BackButton from "../components/backbutton";

export default function ContactPage() {
  return (
    <Fragment>
      <Header title="Contact"/>
      <BackButton/>
      <h1 id="homepage-title">Let's Work Together.</h1>
      <div id="contact-wrapper">
        <p className="paragraph">Send an Email to agamfbusiness@gmail.com  with any business related matters <br/> 
        and i will review the message in my free time :)</p>
        <br/><br/><br/>
        <h1 style={{ fontSize: "50px", marginTop: "0px" }}>OR</h1>
        <p className="paragraph">Fill out this form to leave a message:</p>
        <form id="form" action="https://formsubmit.co/AgamFbusiness@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false"/>
            <textarea placeholder="Your message here" type="text" name="content" required></textarea>
            <input placeholder="Your name here" name="name" required autocomplete="off"></input>
            <button className="menu-btn" type="submit">Send</button>
        </form>
      </div>
      <ParticlesComponent/>
    </Fragment>
  );
}