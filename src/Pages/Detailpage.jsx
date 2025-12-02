import React, { use, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { PiUserFocusBold } from "react-icons/pi";
import { GrGallery } from "react-icons/gr";
import { HiMiniIdentification } from "react-icons/hi2";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthContext";

const Detailpage = () => {
  const { user } = use(AuthContext);

  const data = useLoaderData();
  const { id } = useParams();

  //dynamic tab name set
  useEffect(() => {
    document.title = "Detail | Gaming Zone";
  }, []);

  const singleGame = data?.find((game) => game.id == id);

  const {
    downloadLink,
    category,
    coverPhoto,
    description,
    developer,
    ratings,
    title,
  } = singleGame;

  // you migth also like feather er jonno

  const someGame = data.slice(0, 4);
  // console.log(someGame);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 text-gray-300 min-h-screen py-10">
      <div className="w-11/12 mx-auto">
        <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
          <h2 className="text-center text-4xl font-bold mb-8 text-lime-600">
            Game Details
          </h2>
          <div className=" my-3 flex gap-3">
            <img src={coverPhoto} alt="" className=" h-20 rounded-2xl" />
            <div>
              <h4 className=" text-lime-500 font-bold">{title}</h4>
              <p className=" text-lime-700">{category}</p>
              <div className=" flex items-center gap-2">
                <a
                  href={user ? downloadLink : "/login"}
                  className=" bg-lime-400 px-8 py-1 rounded-full text-gray-900"
                >
                  Get
                </a>
                <span className=" text-gray-500 text-[10px]">
                  In App <br></br>Purchases
                </span>
              </div>
            </div>
          </div>
          <hr className=" my-4" />
          <div className=" flex justify-between font-bold my-2">
            <div className=" text-center text-gray-400 mb-0">
              <h4>Age</h4>
              <p className=" text-2xl text-gray-500">10+</p>
              <p>Years Old</p>
            </div>

            <div className=" text-center text-gray-400  mb-0">
              <h4>Category</h4>
              <p className=" text-2xl text-gray-500 flex justify-center">
                <TbCategoryFilled />
              </p>
              <p>{category}</p>
            </div>

            <div className=" text-center text-gray-400  mb-0">
              <h4>Developer</h4>
              <p className=" text-2xl text-gray-500 flex justify-center">
                <FaUser />
              </p>
              <p>{developer}</p>
            </div>

            <div className=" text-center text-gray-400  mb-0">
              <h4>Language</h4>
              <p className=" text-2xl text-gray-500 flex justify-center">En</p>
              <p>+1 More</p>
            </div>
          </div>

          <hr className=" my-3" />
          <div className="flex flex-col md:flex-row  gap-6">
            <img
              src={coverPhoto}
              alt={title}
              className="w-full md:w-1/2 max-h-80  rounded-2xl"
            />

            <div className="flex-1   text-gray-800 space-y-3">
              <h2 className="text-2xl font-semibold text-lime-600 ">{title}</h2>
              <div className=" flex justify-between">
                <p>
                  <span className=" font-semibold">Category</span> :{" "}
                  <span>{category}</span>
                </p>
                <p className=" flex items-center gap-2">
                  <span className=" font-semibold">Rating</span>
                  {ratings}
                  <FaStar className=" text-warning" />
                </p>
              </div>
              <p>
                <span className=" font-semibold">Description : </span>{" "}
                <span className=" text-gray-500">{description}</span>
              </p>
              <hr className=" my-3" />

              <div>
                <h3 className=" text-xl">Rating & Review</h3>
                <p className=" text-gray-500">
                  This game has received a remarkable number of ratings so far.
                </p>
              </div>
            </div>
          </div>

          <div className=" my-3">
            <h3 className=" font-semibold text-gray-700">New Horizons Await</h3>
            <p className=" text-gray-500 ">
              We invite you to experience our game and enjoy everything it has
              to offer. This is just the beginning — many exciting new features
              and improvements are on the way! For our loyal players, we’ve
              fine-tuned character creation, improved animations, and enhanced
              visual details to deliver a more immersive and engaging
              experience. In addition, we’re thrilled to introduce a brand-new
              event — Deep Sea Expedition — a thrilling underwater adventure
              where players can explore mysterious depths and unlock exclusive
              rewards.
            </p>
          </div>

          <hr className=" my-3" />

          <div>
            <h3 className=" font-semibold text-gray-700">App Privacy</h3>
            <p className=" text-gray-500">
              We value your privacy and are committed to protecting your
              personal information. Our game collects only the data necessary to
              provide a better gameplay experience — such as basic account
              details and performance analytics. We do not share your personal
              data with third parties without your consent. All information is
              securely stored and used strictly to improve features, optimize
              performance, and ensure a safe and enjoyable environment for every
              player.
            </p>

            <div className=" flex flex-col md:flex-row gap-4 justify-between my-2">
              {/* card 1 */}
              <div className=" text-gray-700 text-center bg-gray-300 rounded-2xl p-3">
                <p className=" flex justify-center">
                  <PiUserFocusBold className=" text-4xl" />
                </p>
                <h3>Data Used Track You</h3>
                <p className=" text-gray-500">
                  We may use limited data such as device ID and interaction
                  history to enhance gameplay insights and personalize your
                  experience. No sensitive personal information is collected or
                  shared.
                </p>
                <div className=" m-2">
                  <div className=" flex justify-between">
                    <p className=" flex items-center gap-2">
                      <GrGallery />
                      <span> User Content</span>
                    </p>

                    <p className=" flex items-center gap-2">
                      <HiMiniIdentification />
                      <span> Identifiers</span>
                    </p>
                  </div>
                  <div className=" flex justify-between">
                    <p className=" flex items-center gap-2">
                      <BsFillClipboardDataFill />
                      <span> User Data</span>
                    </p>

                    <p className=" flex items-center gap-2">
                      <FaGear />
                      <span>Diagnostics</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className=" text-gray-700 text-center bg-gray-300 rounded-2xl p-3">
                <p className=" flex justify-center">
                  <FaUserCircle className=" text-4xl" />
                </p>
                <h3>Data Linked to You</h3>
                <p className=" text-gray-500">
                  Some basic information, such as your username, email, and
                  gameplay progress, may be linked to your account to provide
                  personalized experiences and ensure seamless access across
                  devices.
                </p>
                <div className=" m-2">
                  <div className=" flex justify-between">
                    <p className=" flex items-center gap-2">
                      <GrGallery />
                      <span> User Content</span>
                    </p>

                    <p className=" flex items-center gap-2">
                      <HiMiniIdentification />
                      <span> Identifiers</span>
                    </p>
                  </div>
                  <div className=" flex  justify-between">
                    <p className=" flex items-center gap-2">
                      <BsFillClipboardDataFill />
                      <span> User Data</span>
                    </p>

                    <p className=" flex items-center gap-2">
                      <FaGear />
                      <span>Diagnostics</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" text-gray-700 mt-10">
              <div className=" flex items-center justify-between">
                <h2 className=" text-xl my-3 font-semibold text-lime-500">
                  you might also like
                </h2>
                <Link to="/allGame" className=" btn bg-lime-500">
                  See All
                </Link>
              </div>
              <div className=" grid grid-cols-1 sm:grid-cols-2  gap-3">
                {someGame?.map((game) => {
                  return (
                    <div key={game.id} className=" flex items-center gap-3">
                      <img
                        className=" h-15 w-15 rounded-xl"
                        src={game.coverPhoto}
                        alt=""
                      />
                      <div>
                        <p className=" text-[15px] text-lime-600">
                          {game.title}
                        </p>
                        <p className=" text-[12px]">
                          {game.description.slice(0, 40)}...
                        </p>
                        <div className=" flex gap-2">
                          <a
                            href={game.downloadLink}
                            className=" bg-lime-500 px-3  py- rounded-xl"
                          >
                            get
                          </a>
                          <span className=" text-gray-500">
                            In App Purchases
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
