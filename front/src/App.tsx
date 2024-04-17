import { FC } from "react";
import { ToastContainer } from "react-toastify";
import Post from "./components/post";
import "react-toastify/dist/ReactToastify.min.css";

const App: FC = () => {
  return (
    <>
      <Post />
      <ToastContainer />
    </>
  );
};

export default App;
