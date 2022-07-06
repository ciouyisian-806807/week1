export interface IPostQuery {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface ISSRPostProps {
  post: IPostQuery[];
}
