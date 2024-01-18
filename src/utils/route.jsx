import { createBrowserRouter } from "react-router-dom";
import {
  Landing,
  Cart,
  About,
  Checkout,
  Error,
  HomeLayout,
  Orders,
  SingleProduct,
  Products,
  Brands,
  Media,
  Contact,
  SingleMedia,
} from "../pages";

//like 404 page
import { ErrorElement } from "../components";

// loaders --- data loader
import { loader as landingLoader } from "../pages/Landing";
import { loader as singleProductLoader } from "../pages/SingleProduct";
import { loader as productLoader } from "../pages/Products";
// actions
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/orders", element: <Orders /> },
      { path: "/about", element: <About /> },
      { path: "/brands", element: <Brands /> },
      { path: "/media", element: <Media /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/media/:id", element: <SingleMedia />, errorElement: <Error /> },
]);
