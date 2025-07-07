import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <div className=" dark:bg-slate-800 dark:text-white">
    <App />
    <ToastContainer hideProgressBar={true} />
  </div>
  // </React.StrictMode>,
);
