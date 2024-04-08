import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import ErrorPage from "../pages/error-page";
import Cart from "../pages/Cart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      { path: "/profile", element: <Profile /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
