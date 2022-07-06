import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import { IPostQuery, ISSRPostProps } from "./type";

const Sign: NextPage<ISSRPostProps> = ({ post }) => {
  return (
    <>
      <h1>I'm Sign</h1>
      <div>SSR page</div>
      {!post && <>no data</>}
      {post &&
        post.map((element: IPostQuery) => {
          return (
            <div key={element.id}>
              <h1>{element.title}</h1>
              <p>{element.body}</p>
            </div>
          );
        })}
      <Link href="/">Homepage</Link>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post: IPostQuery = await result.json();

  return {
    props: { post }, // will be passed to the page component as props
  };
};

export default Sign;
