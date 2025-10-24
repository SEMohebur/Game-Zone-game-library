import React, { useEffect } from "react";
import { Link } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
const NotFoundPage = () => {
  //dynamic tab name set
  useEffect(() => {
    document.title = "404 Not Found | Gaming Zone";
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className=" min-h-64 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 text-white  py-4">
        <h1 className="text-9xl font-extrabold mb-6">404</h1>
        <p className="text-2xl md:text-3xl mb-4 text-center">
          Oops! Page Not Found
        </p>
        <p className="mb-8 text-center max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Go Back Home
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFoundPage;
