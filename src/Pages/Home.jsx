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
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       infinite: bannerCards.length > 1,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       infinite: bannerCards.length > 1,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //       infinite: bannerCards.length > 1,
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <section
        style={{ backgroundImage: `url(${bgImg})` }}
        className="banner bg-cover min-h-screen bg-center"
      >
        <section className="banner w-11/12 mx-auto py-16">
          <div
            className="bg-gray-600 bg-opacity-90 p-10 pt-20 rounded-2xl 
          shadow-[0_4px_20px_rgba(255,0,0,0.6)]"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className=" text-lime-500 text-4xl md:text-5xl font-bold mb-4 text-center"
            >
              Explore Trending <span className="text-red-500">Games</span>
            </motion.h2>

            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto text-center my-6 leading-relaxed">
              Enter a world where action, strategy, and adventure unite! Battle
              in shooters and battle royales, explore open worlds, and rise as a
              legend. Challenge players globally, experience stunning visuals,
              and enjoy every thrilling moment. Grab your controller, gear up,
              and start your ultimate gaming journey!
            </p>

            <div className="mt-6 ">
              <Slider {...settings}>
                {bannerCards.map((game) => (
                  <div key={game.id} className="px-2">
                    <BannerCard game={game} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </section>

      <section>
        <NewsLatter></NewsLatter>
      </section>
      <section className=" bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 ">
        <div className=" w-11/12 mx-auto py-5">
          <h2 className=" text-4xl font-bold text-center text-lime-500 py-5 underline">
            All Games
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3">
            {data?.map((game) => {
              return <Card key={game.id} game={game}></Card>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
