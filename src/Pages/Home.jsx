import React, { useEffect, useState } from "react";
import bgImg from "../assets/5405317.jpg";
import BannerCard from "../Component/BannerCard";
import Slider from "react-slick";

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
              className="text-lime-500 text-4xl md:text-5xl font-bold mb-4 text-center"
            >
              Explore Trending <span className="text-red-500">Games</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center my-6 leading-relaxed"
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
              className="mt-6"
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

      <section>
        <NewsLatter></NewsLatter>
      </section>

      <section className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900">
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
    </div>
  );
};

export default Home;
