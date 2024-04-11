import { FC } from "react";
import PostItem from "./Item";

const PostList: FC = () => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <PostItem />
      <PostItem />
    </div>
  );
};
export default PostList;
