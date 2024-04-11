type Post = {
  id: string;
  title: string;
  content: string;
};

enum ActionTypes {
  ADD_POST = "ADD_POST",
  EDIT_POST = "EDIT_POST",
  DELETE_POST = "DELETE_POST",
  GET_POSTS = "GET_POSTS",
}

type PostAction = {
  type: ActionTypes;
  payload: Post | string;
};
