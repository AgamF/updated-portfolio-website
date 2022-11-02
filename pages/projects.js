import { Fragment } from "react";
import Header from "../components/header";
import ParticlesComponent from "../components/particles";
import projectdata from "../data/projectdata.json";
import ProjectCard from "../components/projectcard";
import BackButton from "../components/backbutton";

export default function ProjectsPage() {
  return (
    <Fragment>
      <Header title="Projects"/>
      <BackButton/>
      <h1 id="homepage-title">My Projects</h1>
      <hr style={{ width: "10%", padding: "1px", background: "white", borderRadius: "8px", marginBottom: "60px" }}></hr>
      <div id="projects-wrapper">
        {projectdata.map((entry) => (
          <ProjectCard key={entry} options={{
            label: entry.label,
            img: entry.img,
            link: entry.link,
            overview: entry.overview
          }}/>
        ))}
      </div>
      <ParticlesComponent/>
    </Fragment>
  );
}