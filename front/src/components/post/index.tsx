import { FC } from "react";
import PostList from "./List";
import PostInput from "./Inputs";
import PostHeader from "./Header";
import { PostProvider } from "@/contexts/post";

const Post: FC = () => {
  return (
    <PostProvider>
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
    </PostProvider>
  );
};

export default Post;
