import AddProduct from "../pages/AddProduct";
import Compare from "../pages/Compare";
import Home from "../pages/Home";
import List from "../pages/List";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import User from "../pages/User";

export const pathRouters = {
  HOME: "/",
  SIGNUP: "/signup",
  LOGIN: "/login",
  USER: "/user",
  LIST: "/list",
  COMPARE: "/compare",
  ADD: "/add",
};

export const routers = [
  {
    path: pathRouters.HOME,
    element: <Home />,
    isPrivate: false,
  },
  {
    path: pathRouters.SIGNUP,
    element: <Signup />,
    isPrivate: false,
  },
  {
    path: pathRouters.LOGIN,
    element: <Login />,
    isPrivate: false,
  },
  {
    path: pathRouters.USER,
    element: <User />,
    isPrivate: false,
  },
  {
    path: pathRouters.LIST,
    element: <List />,
    isPrivate: false,
  },
  {
    path: pathRouters.COMPARE,
    element: <Compare />,
    isPrivate: false,
  },
  {
    path: pathRouters.ADD,
    element: <AddProduct />,
    isPrivate: false,
  },
];
