import type { NextPage } from "next";
import Link from 'next/link';
import ThemeBlock from "../components/ThemeBlock";
// import style from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <h1>I'm Homepage</h1>
      <Link href="/Sign">Sign</Link>
      <ThemeBlock />
    </>
  );
};

export default Home;
