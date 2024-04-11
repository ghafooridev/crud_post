import { createContext, Dispatch, ReactNode } from "react";
import { PostReducer } from "@/reducers/post";

export const initialPostState: PostState = {
  posts: [{ id: "1", title: "aa", content: "bb" }],
  selectedPost: { id: "", title: "", content: "" } as Post,
};

const PostContext = createContext<PostState>(initialPostState);
const PostDispatchContext = createContext<Dispatch<PostAction> | null>(null);

import { useReducer } from "react";

type providerProps = {
  children: ReactNode; //👈 children prop typr
};

const PostProvider = (props: providerProps) => {
  const [state, dispatch] = useReducer(PostReducer, initialPostState);

  return (
    <div>
      <PostContext.Provider value={state}>
        <PostDispatchContext.Provider value={dispatch}>
          {props.children}
        </PostDispatchContext.Provider>
      </PostContext.Provider>
    </div>
  );
};

export { PostContext, PostProvider, PostDispatchContext };
