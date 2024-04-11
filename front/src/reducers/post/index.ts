export const PostReducer = (posts: Post[], action: PostAction) => {
  switch (action.type) {
    case ActionTypes.ADD_POST: {
      const { id, title, content } = action.payload as Post;
      return [
        ...posts,
        {
          id,
          title,
          content,
        },
      ];
    }
    case ActionTypes.EDIT_POST: {
      const { id, title, content } = action.payload as Post;
      return posts.map((post) => {
        if (post.id === id)
          return {
            ...post,
            title,
            content,
          };

        return post;
      });
    }
    case ActionTypes.DELETE_POST: {
      const id = action.payload as string;
      return posts.filter((post) => post.id !== id);
    }
    case ActionTypes.GET_POSTS: {
      return [...posts];
    }
    default: {
      const otherAction: never = action.type;
      return otherAction;
    }
  }
};
