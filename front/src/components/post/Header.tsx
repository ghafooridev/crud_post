import { FC, useState } from "react";

const Header: FC = () => {
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <p className=" text-2xl">Posts(2)</p>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            value={search}
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
