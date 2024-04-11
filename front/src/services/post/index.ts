import { PostDispatchContext } from "@/contexts/post";
import useQuery from "@/hooks/useQuery";
import { useContext } from "react";

export const usePosts = () => {
  const dispatch = useContext(PostDispatchContext);
  const getPosts = useQuery<Post[]>("/posts");
  const getPosts = () => {
    dispatch!({ type: ActionTypes.GET_POSTS });
    return getPosts;
  };
  return { getPosts };
};
