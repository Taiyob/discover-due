import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import MyServices from "../pages/MyServices";
import AddServices from "../pages/AddServices";
import MySchedules from "../pages/MySchedules";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import UserProfile from "../pages/UserProfile";
import ManageServices from "../pages/ManageServices";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/my-services",
        element: (
          <PrivateRouter>
            <MyServices></MyServices>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/add-services",
        element: (
          <PrivateRouter>
            <AddServices></AddServices>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/manage-services",
        element: (
          <PrivateRouter>
            <ManageServices></ManageServices>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/my-schedules",
        element: (
          <PrivateRouter>
            <MySchedules></MySchedules>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default Router;
