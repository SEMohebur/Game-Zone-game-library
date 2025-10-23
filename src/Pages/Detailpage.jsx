import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaStar } from "react-icons/fa";

const Detailpage = () => {
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

  return (
    <div className=" bg-fuchsia-950 text-gray-300">
      <div className="  w-11/12 mx-auto">
        <div className=" p-5">
          <div className="card card-side bg-gray-800  shadow-xl flex flex-col md:flex-row">
            <figure className=" rounded-0">
              <img className=" h-72" src={coverPhoto} alt="game img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Title : {title}</h2>
              <h4>Category : {category}</h4>
              <p>Description : {description}</p>
              <p>developer : {developer}</p>
              <p className=" flex items-center gap-2">
                Ratings : {ratings} <FaStar className=" text-warning" />
              </p>
              <div className="card-actions justify-end">
                <a href={downloadLink} className="btn btn-warning">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className=" p-5">
          Gaming Zone brings together the world’s most popular mobile games in
          one place — including Call of Duty: Mobile, Free Fire MAX, Clash of
          Clans, Clash Royale, Genshin Impact, Apex Legends Mobile, and Among
          Us. This app lets you explore everything about your favorite games —
          from detailed descriptions, ratings, and developer info to download
          links and gameplay insights. Each game is carefully presented to help
          you discover what makes it unique, so you can easily decide your next
          adventure. <br /> 🔥 Why You’ll Love Gaming Zone: Organized categories
          for every game genre Direct official download links and latest updates
          Clean interface with visually rich design Real-time ratings and
          authentic game reviews Whether you’re into FPS, Battle Royale,
          Strategy, or Party games, Gaming Zone offers the ultimate gaming
          experience right at your fingertips. Discover, compare, and dive deep
          into your favorite titles — all in one dynamic platform. Get ready to
          explore, play, and dominate the gaming world!
        </p>
        <div className=" p-5">
          <Link to="/" className="btn btn-primary">
            Beck to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
