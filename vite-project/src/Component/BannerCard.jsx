import React from "react";

const BannerCard = ({ game }) => {
  return (
    <div
      key={game.id}
      className="card m-3 bg-base-100 image-full min-h-96  shadow-[0_8px_20px_rgba(0,0,255,0.6)] hover:scale-105 transition-transform duration-300"
    >
      <figure>
        <img src={game.coverPhoto} alt={game.title} className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-400 text-2xl font-bold drop-shadow-lg">
          {game.title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {game.description}
        </p>
        <div className="mt-2 text-sm text-gray-300">
          <p>
            <span className="font-semibold text-gray-400">Developer:</span>{" "}
            {game.developer}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Ratings:</span> ⭐{" "}
            {game.ratings}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Category:</span>{" "}
            {game.category}
          </p>
        </div>
        <div className="card-actions justify-end mt-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-5"
          >
            App Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
