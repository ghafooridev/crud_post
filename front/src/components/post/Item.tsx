import { FC } from "react";
import { EditIcon } from "@/icons/Edit";
import { DeleteIcon } from "@/icons/Delete";

const PostList: FC = () => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl duration-75 hover:scale-105">
      <div className="card-body">
        <div className="card-title flex justify-between items-center">
          <h2>Shoes!</h2>
          <div className="flex items-center gap-2">
            <button className="btn btn-circle btn-outline btn-sm">
              <EditIcon />
            </button>
            <button className="btn btn-circle btn-outline btn-sm">
              <DeleteIcon />
            </button>
          </div>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};
export default PostList;
