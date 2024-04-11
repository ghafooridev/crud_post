import { FC } from "react";
import PostList from "./List";
import PostInput from "./Inputs";
import PostHeader from "./Header";

const Post: FC = () => {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <div className="col-start-5 col-span-4">
          <PostHeader />
          <div className="divider"></div>
          <PostInput />
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Post;
