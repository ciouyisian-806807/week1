import type { NextPage } from "next";
import Link from "next/link";
import ThemeBlock from "../../components/ThemeBlock";

const Sign: NextPage = () => {
  return (
    <>
      <h1>I'm Sign</h1>
      <Link href="/">Homepage</Link>
      <ThemeBlock />
    </>
  );
};
export default Sign;
