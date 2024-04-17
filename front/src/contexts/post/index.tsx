import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import { PostReducer } from "@/reducers/post";
import { InitialPostState } from "@/helper/Constants";
import useQuery from "@/hooks/useQuery";
import { useDebounce } from "@/hooks/useDebounce";

type ProviderProps = {
  children: ReactNode;
};

const PostContext = createContext<{
  postState: PostState;
  dispatch: Dispatch<PostAction>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  query: ReturnType<typeof useQuery>;
} | null>(null);

const PostProvider: FC<ProviderProps> = (props) => {
  const [postState, dispatch] = useReducer(PostReducer, InitialPostState);
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search);
  const [queryUrl, setQueryUrl] = useState("post");
  const query = useQuery<Post[]>(queryUrl, true);

  useEffect(() => {
    if (debounceSearch.length) {
      return setQueryUrl(`post?search=${debounceSearch}`);
    }
    setQueryUrl("post");
  }, [debounceSearch]);

  useEffect(() => {
    query.refetch();
  }, [queryUrl]);

  const value = { postState, dispatch, search, setSearch, query };

  return (
    <div>
      <PostContext.Provider value={value}>
        {props.children}
      </PostContext.Provider>
    </div>
  );
};

export { PostContext, PostProvider };
