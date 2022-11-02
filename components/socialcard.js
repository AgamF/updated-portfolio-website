import Link from "next/link";

export default function Card(props) {
  return (
    <Link href={props.link}>
      <div id="card">
        <img width={70} height={70} src={props.img}></img>
        <p>{props.label}</p>
      </div>
    </Link>
  );
}