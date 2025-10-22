import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import Detailpage from "../Pages/Detailpage";
import NotFoundPage from "../Pages/NotFoundPage";
import About from "../Pages/About";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "/detailPage/:id",
        element: (
          <PrivateRoute>
            <Detailpage></Detailpage>
          </PrivateRoute>
        ),
        loader: () => fetch("/allAppsData.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      { path: "/about", element: <About></About> },
    ],
  },
  { path: "*", element: <NotFoundPage></NotFoundPage> },
]);
