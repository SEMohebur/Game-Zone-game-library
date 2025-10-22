import React from "react";
import { Link } from "react-router";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white px-4">
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
  );
};

export default NotFoundPage;
