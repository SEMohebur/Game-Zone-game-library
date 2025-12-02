import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const BannerCard = ({ game }) => {
  const { coverPhoto, description, ratings, title } = game;
  return (
    <>
      <Link to={`/detailPage/${game.id}`}>
        <div className="card bg-gray-200  shadow-sm">
          <figure>
            <img
              src={coverPhoto}
              alt="Shoes"
              className="w-full h-32 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-[15px] font-bold text-lime-500">{title}</h2>
            <p className=" text-cyan-600">{description}</p>

            <div>
              Welcome to Game Zone — your hub for exciting, action-packed, and
              fun gaming experiences. We bring together games for all players,
              from casual beginners to hardcore enthusiasts.
            </div>
            <p className=" flex items-center gap-2">
              {ratings}{" "}
              <span className=" flex text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BannerCard;
