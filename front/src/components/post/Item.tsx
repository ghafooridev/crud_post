import { FC, useContext } from "react";
import { EditIcon } from "@/icons/Edit";
import { DeleteIcon } from "@/icons/Delete";
import useMutation from "@/hooks/useMutation";
import { PostDispatchContext } from "@/contexts/post";
import { HttpMethod, PostActionTypes } from "@/helper/Constants";

const PostItem: FC<Post> = (post) => {
  const { id, title, content } = post;
  const { execute } = useMutation();
  const dispatch = useContext(PostDispatchContext);

  const onClickDelete = (id: string) => {
    execute({ url: `post/${id}`, method: HttpMethod.DELETE });
  };

  const onClickEdit = (post: Post) => {
    dispatch!({ type: PostActionTypes.SET_POST, payload: post });
  };

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl duration-75 hover:scale-105">
      <div className="card-body">
        <div className="card-title flex justify-between items-center">
          <h2>{title}</h2>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-circle btn-outline btn-sm"
              onClick={() => onClickEdit(post)}
            >
              <EditIcon />
            </button>
            <button
              className="btn btn-circle btn-outline btn-sm"
              onClick={() => onClickDelete(id)}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default PostItem;
