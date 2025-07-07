import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
