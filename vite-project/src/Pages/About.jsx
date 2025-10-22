import React from "react";
import teamImg from "../assets/11224.jpg";

const About = () => {
  return (
    <section className=" bg-blue-950  text-white bg-opacity-90 py-20 px-4">
      <div className=" w-11/12 mx-auto space-y-10">
        <div className=" text-center">
          {" "}
          <h2 className=" text-3xl text-red-500">
            <span className=" text-blue-500">About</span> GameZone
          </h2>
          <p className="text-gray-400">
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
          <h4 className=" font-bold text-gray-300 text-center text-xl mb-3">
            Meet Your Team
          </h4>
          {/* cards */}
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="card ">
              <figure>
                <img src={teamImg} alt="Shoes" className="rounded-t-md h-40" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Choyon</h2>
                <p className=" ">Founder & Lead Gamer</p>
              </div>
            </div>

            <div className="card ">
              <figure>
                <img src={teamImg} alt="Shoes" className="rounded-t-md h-40" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Anik</h2>
                <p className=" ">Community Manager</p>
              </div>
            </div>

            <div className="card ">
              <figure>
                <img src={teamImg} alt="Shoes" className="rounded-t-md h-40" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Sunny</h2>
                <p className=" ">Game Reviewer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
