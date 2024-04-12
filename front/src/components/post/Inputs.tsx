import { PostContext } from "@/contexts/post";
import { randomId } from "@/helper";
import { HttpMethod, PostActionTypes } from "@/helper/Constants";
import useMutation from "@/hooks/useMutation";
import { FC, useContext, useEffect, useState } from "react";

const PostInput: FC = () => {
  const [input, setInput] = useState<Record<"title" | "content", string>>({
    title: "",
    content: "",
  });

  const { postState, dispatch } = useContext(PostContext)!;
  const { data, loading, execute } = useMutation();

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onEdit = () => {
    const post = { id: postState.selectedPost.id, ...input };
    // execute({ url: "/post", body: post, method: HttpMethod.PUT });
    dispatch!({
      type: PostActionTypes.EDIT_POST,
      payload: post,
    });
  };
  const onAdd = () => {
    const post = { id: randomId(), ...input };
    // execute({ url: "/post", method: HttpMethod.POST, body: newPost });
    dispatch!({
      type: PostActionTypes.ADD_POST,
      payload: post,
    });
  };

  const onClickSubmit = () => {
    if (postState.selectedPost.id !== "") return onEdit();
    onAdd();
  };

  console.log(postState);

  useEffect(() => {
    setInput({
      title: postState.selectedPost.title,
      content: postState.selectedPost.content,
    });
  }, [postState.selectedPost]);

  return (
    <div>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text font-bold">Title</span>
        </div>
        <input
          value={input.title}
          type="text"
          name="title"
          placeholder="Post title"
          className="input input-bordered w-full input-sm"
          onChange={onChangeInput}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text font-bold">Content</span>
        </div>
        <textarea
          value={input.content}
          placeholder="Post content"
          className="textarea textarea-bordered textarea-sm w-full "
          name="content"
          onChange={onChangeInput}
        ></textarea>
      </label>
      <button
        className="btn btn-primary w-full btn-sm mt-4"
        onClick={onClickSubmit}
      >
        {postState.selectedPost.id !== "" ? "Edit Post" : "Create Post"}
      </button>
    </div>
  );
};
export default PostInput;
