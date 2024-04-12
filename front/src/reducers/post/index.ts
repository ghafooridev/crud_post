import { PostActionTypes, InitialPostState } from "@/helper/Constants";

export const PostReducer = (state: PostState, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.ADD_POST: {
      const { id, title, content } = action.payload as Post;
      return {
        selectedPost: InitialPostState.selectedPost,
        posts: [
          ...state.posts,
          {
            id,
            title,
            content,
          },
        ],
      };
    }
    case PostActionTypes.EDIT_POST: {
      const { id, title, content } = action.payload as Post;

      return {
        selectedPost: InitialPostState.selectedPost,
        posts: state.posts.map((post) => {
          if (post.id === id) {
            console.log("x");
            return {
              id,
              title,
              content,
            };
          }
          return post;
        }),
      };
    }
    case PostActionTypes.DELETE_POST: {
      const id = action.payload as string;

      return {
        ...state,
        selectedPost: InitialPostState.selectedPost,
        posts: [...state.posts.filter((post) => post.id !== id)],
      };
    }

    case PostActionTypes.SET_POST: {
      return { ...state, selectedPost: action.payload };
    }
    case PostActionTypes.SET_POSTS: {
      return { ...state, posts: action.payload };
    }

    case PostActionTypes.GET_POSTS: {
      return { ...state };
    }

    default: {
      const otherAction = action.type;
      return otherAction;
    }
  }
};
