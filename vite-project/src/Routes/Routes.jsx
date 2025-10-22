import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import Detailpage from "../Pages/Detailpage";
import AllApp from "../Pages/AllApp";
import NotFoundPage from "../Pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/detailPage", element: <Detailpage></Detailpage> },
      { path: "/allApp", element: <AllApp></AllApp> },
    ],
  },
  { path: "*", element: <NotFoundPage></NotFoundPage> },
]);
