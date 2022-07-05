import { GetServerSideProps } from "next";
import { ISSRPostProps, IPostQuery } from "./type";

type TGetStaticPostProps = {
  post: IPostQuery;
};

const SSRPost: React.FC<ISSRPostProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  TGetStaticPostProps
> = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post: IPostQuery = await result.json();

  return {
    props: { post }, // will be passed to the page component as props
  };
};
export default SSRPost;
