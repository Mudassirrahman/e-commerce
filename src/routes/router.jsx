import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/Products/Products";
import ProductDetail from "../components/ProductDetail/ProductDetail";
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
        path: "/product-detail/:product_id",
        element: <ProductDetail />
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
