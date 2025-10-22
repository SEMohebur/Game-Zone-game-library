import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import Detailpage from "../Pages/Detailpage";
import NotFoundPage from "../Pages/NotFoundPage";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/detailPage", element: <Detailpage></Detailpage> },
      { path: "/about", element: <About></About> },
    ],
  },
  { path: "*", element: <NotFoundPage></NotFoundPage> },
]);
