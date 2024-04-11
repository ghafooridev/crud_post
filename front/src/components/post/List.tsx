import { FC, useContext } from "react";
import PostItem from "./Item";
import useQuery from "@/hooks/useQuery";
import { PostContext, PostDispatchContext } from "@/contexts/post";

const PostList: FC = () => {
  const posts = useContext(PostContext);

  // const { data } = useQuery<Post[]>("/posts");
  console.log(posts);
  return (
    <div className="flex flex-col gap-3 mt-5">
      {posts.posts?.map((item: Post) => {
        return <PostItem {...item} />;
      })}
    </div>
  );
};
export default PostList;
