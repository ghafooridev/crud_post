import { initialPostState } from "@/contexts/post";
import { PostActionTypes } from "@/helper/Constants";

export const PostReducer = (state: PostState, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.ADD_POST: {
      const { id, title, content } = action.payload as Post;
      return {
        selectedPost: initialPostState.selectedPost,
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
        selectedPost: initialPostState.selectedPost,
        posts: state.posts.map((post) => {
          if (post.id === id)
            return {
              id,
              title,
              content,
            };

          return post;
        }),
      };
    }
    case PostActionTypes.DELETE_POST: {
      const id = action.payload as string;

      return {
        ...state,
        selectedPost: initialPostState.selectedPost,
        posts: [...state.posts.filter((post) => post.id !== id)],
      };
    }

    case PostActionTypes.SET_POST: {
      return { ...state, selectedPost: action.payload };
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
