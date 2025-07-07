import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../home/Home";
import Courses from "../courses/Courses";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import NotFoundPage from "../components/NotFoundPage";
import BookDetails from "../components/BookDetails";

interface RouteConfig {
  id: string;
  path: string;
  element: JSX.Element;
  index?: boolean;
}
// Home pages routes
const homePageRoutes: RouteConfig[] = [
  {
    id: "home-root",
    path: "/",
    element: <Home />,
  },
  {
    id: "home",
    path: "/home",
    element: <Home />,
  },
  {
    id: "courses",
    path: "/courses",
    element: <Courses />,
  },
  {
    id: "book-details",
    path: "/book/:id",
    element: <BookDetails />,
  },
];

// Authentication pages
const authRoutes: RouteConfig[] = [
  {
    id: "auth",
    path: "/login",
    element: <Login />,
  },
  {
    id: "signup",
    path: "/signup",
    element: <Signup />,
  },
];

// Page not found path
const notFoundPath: RouteConfig[] = [
  {
    id: "page-not-found",
    path: "*",
    element: <NotFoundPage />,
  },
];

const generateRoutes = (routes: RouteConfig[]) => (
  <>
    {routes.map(({ path, element, index }) => (
      <Route key={path} path={path} element={element} index={index} />
    ))}
  </>
);

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {generateRoutes(homePageRoutes)} // home page routes
      {generateRoutes(authRoutes)} // auth routes
      {generateRoutes(notFoundPath)} // not found page routes
    </Route>
  )
);

export { routes };
