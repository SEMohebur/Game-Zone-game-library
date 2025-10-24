import { useEffect } from "react";
import { IoLogoGameControllerB } from "react-icons/io";

const Reviews = () => {
  //dynamic tab name set
  useEffect(() => {
    document.title = "Reviews | Gaming Zone";
  }, []);
  return (
    <div className=" bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 p-10">
      <div className="w-11/12 mx-auto bg-white p-4 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-lime-500">
          <p className=" flex justify-center">
            {" "}
            <IoLogoGameControllerB />
          </p>
          Game Reviews
        </h2>
        <hr className=" text-gray-300 my-3 "></hr>
        <div className="">
          <div className="  grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" shadow rounded-2xl p-5 text-center">
              <h3 className=" font-bold text-xl text-lime-500">
                Interactive Gaming Experience
              </h3>
              <p className=" text-gray-500">
                Game Zone offers a highly interactive platform for gamers. Its
                smooth and responsive interface ensures an immersive gaming
                experience.
              </p>
            </div>
            <div className=" shadow rounded-2xl p-5 text-center">
              <h3 className=" font-bold text-xl text-lime-500">
                Wide Game Collection
              </h3>
              <p className=" text-gray-500">
                From Action and Adventure to FPS and Puzzle games, Game Zone has
                a diverse selection to cater to all types of gamers.
              </p>
            </div>
            <div className=" shadow rounded-2xl p-5 text-center">
              <h3 className=" font-bold text-xl text-lime-500">
                User-Friendly Interface
              </h3>
              <p className=" text-gray-500">
                The platform is easy to navigate, with an attractive design that
                allows even new users to explore games effortlessly.
              </p>
            </div>
            <div className=" shadow rounded-2xl p-5 text-center">
              <h3 className=" font-bold text-xl text-lime-500">
                High-Quality Reviews & Ratings
              </h3>
              <p className=" text-gray-500">
                Users can rate and review each game, helping others make
                informed decisions and discover top games easily.
              </p>
            </div>
            <div className=" shadow rounded-2xl p-5 text-center">
              <h3 className=" font-bold text-xl text-lime-500">
                Engaging Community
              </h3>
              <p className=" text-gray-500">
                With active community managers and reviewers, Game Zone
                maintains a vibrant and lively platform where gamers can connect
                and stay updated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
