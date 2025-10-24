import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const BannerCard = ({ game }) => {
  const { category, coverPhoto, description, developer, ratings, title } = game;
  return (
    <>
      <Link to={`/detailPage/${game.id}`}>
        <div className="card bg-gray-200  shadow-sm">
          <figure>
            <img
              src={coverPhoto}
              alt="Shoes"
              className="w-full h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-[15px] font-bold text-lime-500">{title}</h2>
            <p className=" text-cyan-600">{description}</p>

            <div>
              Welcome to Game Zone, your ultimate destination for all kinds of
              gaming adventures! From thrilling action and strategic challenges
              to casual fun and creative experiences — we bring together games
              that every player can enjoy. Our goal is to create a community
              where gamers of all ages and skill levels can explore, compete,
              and have fun. Whether you’re a casual player or a hardcore
              enthusiast, Game Zone offers something exciting for everyone. Get
              ready to dive into endless entertainment and discover your next
              favorite game here!
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
