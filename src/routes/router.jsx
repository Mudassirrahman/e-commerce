import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/Products/Products";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
