import { createBrowserRouter } from "react-router-dom";
import {
  Landing,
  Cart,
  About,
  Checkout,
  Error,
  HomeLayout,
  Login,
  Orders,
  SingleProduct,
  Products,
  Register,
  Brands,
  Media,
  Contact,
} from "./pages";

//like 404 page
import { ErrorElement } from "./components";

// loaders --- data loader
import { loader as landingLoader } from "./pages/Landing";

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
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <SingleProduct /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/orders", element: <Orders /> },
      { path: "/about", element: <About /> },
      { path: "/brands", element: <Brands /> },
      { path: "/media", element: <Media /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
]);
