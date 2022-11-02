/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <Link href={props.options.link}>
      <div className="project-card">
        <img src={props.options.img}/>
        <h1>{props.options.label}</h1>
        <hr style={{ width: "50%", padding: "1px", background: "white", borderRadius: "8px" }}></hr>
        <p style={{ textAlign: "center" }}>{props.options.overview}</p>
      </div>
    </Link>
  );
}
