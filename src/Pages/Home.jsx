import React, { useEffect, useState } from "react";
import bgImg from "../assets/5405317.jpg";
import BannerCard from "../Component/BannerCard";
import Slider from "react-slick";

import {
  MdSportsEsports,
  MdExplore,
  MdGroups,
  MdPhoneIphone,
  MdComputer,
  MdTimeline,
  MdDirectionsCar,
  MdSportsSoccer,
} from "react-icons/md";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsLatter from "../Component/NewsLatter";
import * as motion from "motion/react-client";
import Card from "../Component/Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/allAppsData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
    //dynamic tap name set
    document.title = "Home | Gaming Zone";
  }, []);

  const sortedApp = data?.sort(
    (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
  );
  const bannerCards = sortedApp?.slice(0, 3) || [];

  const settings = {
    dots: true,
    infinite: bannerCards.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div>
      {/* herro banner  */}
      <section
        style={{ backgroundImage: `url(${bgImg})` }}
        className="banner bg-cover bg-center "
      >
        <section className="banner w-11/12 mx-auto py-5 h-full">
          <div
            className="bg-gray-100 bg-opacity-90 p-10 pt-6 rounded-2xl 
        shadow-[0_4px_20px_rgba(255,0,0,0.6)] h-full"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className=" text-gray-700 text-3xl md:text-5xl font-bold md:mb-4 text-center"
            >
              Explore Trending <span className=" text-lime-500">Games</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center md:my-6 leading-relaxed"
            >
              Enter a world where action, strategy, and adventure unite! Battle
              in shooters and battle royales, explore open worlds, and rise as a
              legend...
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="mt-6 "
            >
              <Slider {...settings}>
                {bannerCards.map((game) => (
                  <div key={game.id} className="px-2">
                    <BannerCard game={game} />
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>
        </section>
      </section>

      <div className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900">
        {/* top game card  */}
        <section>
          <div className="w-11/12 mx-auto pb-5">
            <h2 className="text-4xl font-bold text-center text-lime-500 py-5 ">
              Top Rating Games
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {sortedApp?.slice(0, 8).map((game) => {
                return <Card key={game.id} game={game}></Card>;
              })}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-6 w-11/12 mx-auto bg-gray-100 rounded-xl p-2">
          <div className=" text-center mb-2">
            <h2 className="text-3xl font-bold text-lime-600 ">
              Explore Categories
            </h2>
            <p className="text-gray-600 mt-2">
              Find games by your favorite genres and interests
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300">
              <MdSportsEsports className="text-5xl text-lime-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">Action</h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300">
              <MdExplore className="text-5xl text-indigo-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">Adventure</h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300">
              <MdGroups className="text-5xl text-pink-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">
                Multiplayer
              </h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300">
              <MdPhoneIphone className="text-5xl text-yellow-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">
                Mobile Games
              </h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300">
              <MdComputer className="text-5xl text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">PC Games</h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300">
              <MdTimeline className="text-5xl text-green-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">Strategy</h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300">
              <MdDirectionsCar className="text-5xl text-red-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">Racing</h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300">
              <MdSportsSoccer className="text-5xl text-orange-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">Sports</h3>
            </div>
          </div>
        </section>

        {/* promotion and offer */}
        <section className="py-6 text-white">
          <div className="w-11/12 mx-auto">
            <div className="text-center mb-2">
              <h2 className="text-3xl font-bold text-lime-500">
                Special Promotions
              </h2>
              <p className="text-gray-200 mt-2">
                Grab the hottest deals & exclusive offers before they expire!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-6 rounded-xl bg-gray-200 hover:scale-105 duration-300">
                <h3 className="text-xl font-bold text-lime-500">
                  30% OFF Games
                </h3>
                <p className="text-gray-700 mt-3">
                  Get premium action & adventure games at amazing discounts!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-200 hover:scale-105 duration-300">
                <h3 className="text-xl font-bold text-lime-500">
                  Limited Time Bundle
                </h3>
                <p className="text-gray-700 mt-3">
                  Buy 2 games and get 1 absolutely FREE! Offer ending soon.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-200 hover:scale-105 duration-300">
                <h3 className="text-xl font-bold text-lime-500">
                  Exclusive Membership
                </h3>
                <p className="text-gray-700 mt-3">
                  Become a premium member & unlock early access to new games!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="w-11/12 mx-auto  pb-6 ">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-lime-500 ">Latest Blog</h2>
            <p className="text-gray-200 mt-2">
              Read our latest updates, tips, and gaming guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-200 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1616757857818-5c6eea38ee17?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTJDdmlkZW98ZW58MHx8MHx8fDA%3D"
                alt="Blog 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Top 10 Action Games of 2025
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Discover the most thrilling and action-packed games that you
                  must try this year.
                </p>
                <p className="mt-3 text-gray-400 text-xs">
                  Posted on Dec 2, 2025
                </p>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1548686304-637b8e7c663b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTJDcGN8ZW58MHx8MHx8fDA%3D"
                alt="Blog 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Ultimate Guide to Multiplayer Games
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Learn strategies and tips to dominate in multiplayer games
                  with your friends.
                </p>
                <p className="mt-3 text-gray-400 text-xs">
                  Posted on Nov 28, 2025
                </p>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1678794373912-15776689850b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTJDY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Blog 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Mobile Games That Are Trending
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Check out the hottest mobile games gaining popularity among
                  gamers worldwide.
                </p>
                <p className="mt-3 text-gray-400 text-xs">
                  Posted on Nov 20, 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* news latter  */}
        <section>
          <NewsLatter></NewsLatter>
        </section>
      </div>
    </div>
  );
};

export default Home;
