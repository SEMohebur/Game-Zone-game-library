import React, { useEffect } from "react";
import teamImg from "../assets/loginPageImg-removebg-preview.png";
import * as motion from "motion/react-client";

const About = () => {
  //dynamic tab name set
  useEffect(() => {
    document.title = "About | Gaming Zone";
  }, []);
  return (
    <section className=" bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 text-white bg-opacity-90 py-20 px-4">
      <div className=" w-11/12 mx-auto space-y-10 bg-white p-10 rounded-2xl">
        <div className=" text-center">
          {" "}
          <motion.h2
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className=" text-3xl font-semibold text-lime-500"
          >
            <span className=" text-gray-600">About</span> Game Zone
          </motion.h2>
          <p className="text-gray-700">
            {" "}
            At GameZone, we are passionate gamers just like you. Our mission is
            to bring the most action-packed, thrilling, and immersive gaming
            experiences to players worldwide. From indie gems to blockbuster
            hits, we review, feature, and share the games that you love. Join
            our community, explore new worlds, and take your gaming journey to
            the next level!
          </p>
        </div>

        <div>
          <h4 className=" font-bold text-gray-700 text-center text-xl mb-3">
            Meet Your Team
          </h4>
          {/* cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className=" grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            <div className="card">
              <figure>
                <img src={teamImg} alt="Shoes" className="rounded-t-md h-40" />
              </figure>
              <div className="card-body shadow-xl text-lime-500 rounded-4xl items-center text-center">
                <h2 className="card-title">Mohebur</h2>
                <p className=" ">Founder & Lead Gamer</p>
                <p className="text-gray-600 text-sm">
                  Location: Dhaka, Bangladesh
                </p>
                <p className="text-gray-600 text-sm">
                  Favorite Game: Call of Duty
                </p>
                <p className="text-gray-600 text-sm">
                  Expertise: Wev Development
                </p>
                <p className="text-gray-600 text-sm">
                  Contact: mohebur@example.com
                </p>
              </div>
            </div>

            <div className="card ">
              <figure>
                <img src={teamImg} alt="Shoes" className="rounded-t-md h-40" />
              </figure>
              <div className="card-body shadow-2xl  text-lime-500 rounded-4xl items-center text-center">
                <h2 className="card-title">Anik</h2>
                <p className=" ">Community Manager</p>
                <p className="text-gray-600 text-sm">
                  Location: Dhaka, Bangladesh
                </p>
                <p className="text-gray-600 text-sm">
                  Focus: Community Engagement & Support
                </p>
                <p className="text-gray-600 text-sm">
                  Contact: anik@example.com
                </p>
              </div>
            </div>

            <div className="card ">
              <figure>
                <img src={teamImg} alt="Shoes" className="rounded-t-md h-40" />
              </figure>
              <div className="card-body shadow-2xl text-lime-500 rounded-4xl items-center text-center">
                <h2 className="card-title">Sunny</h2>
                <p className=" ">Game Reviewer</p>
                <p className="text-gray-600 text-sm">Location: Chittagong</p>
                <p className="text-gray-600 text-sm">
                  Speciality: Mobile & PC Games
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
