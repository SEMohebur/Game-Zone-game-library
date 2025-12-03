import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-10 text-center">
          <div className="flex justify-center mb-6">
            <svg
              className="w-20 h-20 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-800">Error Occurred</h1>

          <p className="mt-3 text-red-500">{error.message}</p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Retry
            </button>

            <a
              href="/"
              className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
