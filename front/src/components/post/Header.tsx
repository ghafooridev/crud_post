import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <p className=" text-2xl">Posts(2)</p>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
