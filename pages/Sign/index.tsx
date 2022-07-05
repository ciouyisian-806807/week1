import type { NextPage } from "next";
import Link from "next/link";
// import SSRPost from '../SSRPost';

const Sign: NextPage = () => {
  return (
    <>
      <h1>I'm Sign</h1>
      <div>SSR page</div>
      <Link href="/">Homepage</Link>
    </>
  );
};
export default Sign;


