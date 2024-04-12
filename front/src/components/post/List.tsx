import { FC, useContext, useEffect } from "react";
import PostItem from "./Item";
import useQuery from "@/hooks/useQuery";
import { PostContext } from "@/contexts/post";
import { PostActionTypes } from "@/helper/Constants";

const PostList: FC = () => {
  const { postState, dispatch } = useContext(PostContext)!;
  // const { data } = useQuery<Post[]>("/posts");
  useEffect(() => {
    dispatch({ type: PostActionTypes.SET_POST, payload: data });
  }, []);
  return (
    <div className="flex flex-col gap-3 mt-5">
      {postState.posts?.map((item: Post) => {
        return <PostItem {...item} />;
      })}
    </div>
  );
};
export default PostList;
