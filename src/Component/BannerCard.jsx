import React from "react";
import { Link } from "react-router";

const BannerCard = ({ game }) => {
  const { category, coverPhoto, description, developer, ratings, title } = game;
  return (
    <div className="card bg-base-100 max-h-70  image-full  shadow-sm ">
      <figure>
        <img src={coverPhoto} alt="Shoes" className=" w-full  object-cover " />
      </figure>
      <div className="card-body cally text-gray-200">
        <h2 className="card-title">{title}</h2>
        <p>Description : {description}</p>
        <p>Category : {category}</p>
        <p>Developer : {developer}</p>
        <p>Ratings : {ratings}</p>
        <div className="card-actions justify-end">
          <Link to={`/detailPage/${game.id}`} className="btn btn-primary">
            Game Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
