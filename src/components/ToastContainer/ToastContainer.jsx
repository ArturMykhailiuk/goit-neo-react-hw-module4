import { ToastContainer as ReactToastifyContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainer = () => {
  return (
    <ReactToastifyContainer
      position="top-right"
      autoClose={1250}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default ToastContainer;
