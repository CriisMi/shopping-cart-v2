import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Cart from "./Cart";
import Home from "./Home";
/* import ErrorPage from "./ErrorPage"; */
import Shop from "./Shop";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
