import { createContext, Dispatch, FC, ReactNode, useReducer } from "react";
import { PostReducer } from "@/reducers/post";
import { InitialPostState } from "@/helper/Constants";

type ProviderProps = {
  children: ReactNode;
};

const PostContext = createContext<{
  postState: PostState;
  dispatch: Dispatch<PostAction>;
} | null>(null);

const PostProvider: FC<ProviderProps> = (props) => {
  const [postState, dispatch] = useReducer(PostReducer, InitialPostState);

  return (
    <div>
      <PostContext.Provider value={{ postState, dispatch }}>
        {props.children}
      </PostContext.Provider>
    </div>
  );
};

export { PostContext, PostProvider };
