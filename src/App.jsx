import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
} from "./pages";

import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
// actions
const router = createBrowserRouter([
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
    ],
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
