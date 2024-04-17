type Post = {
  id: string;
  title: string;
  content: string;
};

type PostAction = {
  type: PostActionTypes;
  payload?: Post | Post[] | string;
};

type PostState = {
  posts: Post[];
  selectedPost: Post;
};
