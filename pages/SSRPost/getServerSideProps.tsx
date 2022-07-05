import { GetServerSideProps } from "next";
import { IPostQuery } from "./type";

type TGetStaticPostProps = {
  post: IPostQuery;
};
export const getServerSideProps: GetServerSideProps<
  TGetStaticPostProps
> = async (context) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post: IPostQuery = await result.json();

  return {
    props: { post }, // will be passed to the page component as props
  };
};
