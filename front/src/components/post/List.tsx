import { FC, useContext, useEffect } from "react";
import PostItem from "./Item";
import { PostContext } from "@/contexts/post";
import { PostActionTypes } from "@/helper/Constants";

const PostList: FC = () => {
  const { postState, dispatch, query } = useContext(PostContext)!;

  useEffect(() => {
    dispatch({
      type: PostActionTypes.SET_POSTS,
      payload: query.data as Post[],
    });
  }, [query.data]);

  return (
    <div className="flex flex-col gap-3 mt-5">
      {postState.posts?.length > 0 ? (
        postState.posts?.map((item: Post) => {
          return <PostItem key={item.id} {...item} />;
        })
      ) : (
        <span className="text-center text-lg font-bold">
          No Data To Display
        </span>
      )}
    </div>
  );
};
export default PostList;
