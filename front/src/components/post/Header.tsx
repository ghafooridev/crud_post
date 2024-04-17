import { PostContext } from "@/contexts/post";
import { FC, useContext } from "react";

const Header: FC = () => {
  const { setSearch, postState } = useContext(PostContext)!;

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <p className=" text-2xl">Posts({postState.posts?.length})</p>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm w-24 md:w-auto"
            onChange={onChangeSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
