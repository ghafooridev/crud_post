import { createContext, Dispatch, ReactNode } from "react";
import { PostReducer } from "@/reducers/post";

const PostContext = createContext<Post[] | null>(null);
const PostDispatchContext = createContext<Dispatch<PostAction> | null>(null);

import { useReducer } from "react";

const PostProvider = (children: ReactNode) => {
  const [posts, dispatch] = useReducer(PostReducer, []);

  return (
    <div>
      <PostContext.Provider value={posts}>
        <PostDispatchContext.Provider
          value={dispatch}
        ></PostDispatchContext.Provider>
        {children}
      </PostContext.Provider>
    </div>
  );
};

export { PostContext, PostProvider, PostDispatchContext };
