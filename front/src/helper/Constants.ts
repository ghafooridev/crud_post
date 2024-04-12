export enum PostActionTypes {
  ADD_POST = "ADD_POST",
  EDIT_POST = "EDIT_POST",
  DELETE_POST = "DELETE_POST",
  GET_POSTS = "GET_POSTS",
  SET_POST = "SET_POST",
  SET_POSTS = "SET_POSTS",
}

export enum HttpMethod {
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  GET = "get",
}

export const InitialPostState: PostState = {
  posts: [{ id: "1", title: "aa", content: "bb" }],
  selectedPost: { id: "", title: "", content: "" } as Post,
};
