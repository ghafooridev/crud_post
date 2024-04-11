import { FC } from "react";

const PostInput: FC = () => {
  return (
    <div>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text font-bold">Title</span>
        </div>
        <input
          type="text"
          placeholder="Post title"
          className="input input-bordered w-full input-sm"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text font-bold">Content</span>
        </div>
        <textarea
          placeholder="Post content"
          className="textarea textarea-bordered textarea-sm w-full "
        ></textarea>
      </label>
      <button className="btn btn-primary w-full btn-sm mt-4">Primary</button>
    </div>
  );
};
export default PostInput;
