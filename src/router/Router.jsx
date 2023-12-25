import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
    ]
  },
]);

export default Router;
