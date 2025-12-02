import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const Card = ({ game }) => {
  const { category, coverPhoto, description, developer, ratings, title } = game;
  return (
    <div className="card bg-gray-200 rounded-xl shadow transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
      <figure>
        <img
          src={coverPhoto}
          alt="Shoes"
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className=" text-[15px] font-bold text-lime-500">{title}</h2>
        <p className=" text-cyan-600">{description.slice(0, 30)}...</p>

        <div>
          <div className="">
            <p className=" flex items-center gap-2 text-gray-600">
              <BiCategory className=" text-indigo-600" />
              {category}
            </p>
          </div>
          <div className=" flex items-center gap-2 text-gray-600">
            <FaUser className=" text-indigo-600" /> {developer}
          </div>
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
        <div className="card-actions justify-end">
          <Link
            to={`/detailPage/${game.id}`}
            className="btn bg-lime-500 text-white"
          >
            Game Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
