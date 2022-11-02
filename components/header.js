import Head from "next/head";

export default function Header(props) {
  return (
    <Head>
      <title>Agam Farajpur | {props.title}</title>
    </Head>
  );
}