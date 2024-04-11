import { PostContext, PostDispatchContext } from "@/contexts/post";
import { randomId } from "@/helper";
import useMutation from "@/hooks/useMutation";
import { FC, useContext, useEffect, useState } from "react";

const PostInput: FC = () => {
  const [input, setInput] = useState<Record<"title" | "content", string>>({
    title: "",
    content: "",
  });

  const postData = useContext(PostContext);
  const dispatch = useContext(PostDispatchContext);
  const { data, loading, execute } = useMutation();

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onClickSubmit = () => {
    const newPost = { id: randomId(), ...input };

    execute({ url: "/post", method: HttpMethod.POST, body: newPost });
    dispatch!({
      type: ActionTypes.ADD_POST,
      payload: newPost,
    });
  };

  console.log(postData.selectedPost);

  useEffect(() => {
    setInput({
      title: postData.selectedPost.title,
      content: postData.selectedPost.content,
    });
    console.log("xxxxxxxx");
  }, [postData.selectedPost]);

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
        CreatePost
      </button>
    </div>
  );
};
export default PostInput;
