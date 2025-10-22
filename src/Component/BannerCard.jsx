import React from "react";

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
          <button className="btn btn-primary">Game Detail</button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
