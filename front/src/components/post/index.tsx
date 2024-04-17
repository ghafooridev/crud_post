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
          <div className="lg:col-start-4 lg:col-span-6 col-start-2 col-span-10">
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
