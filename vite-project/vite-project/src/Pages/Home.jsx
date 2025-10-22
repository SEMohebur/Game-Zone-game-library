import React, { useEffect, useState } from "react";
import bgImg from "../assets/5405317.jpg";
import BannerCard from "../Component/BannerCard";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsLatter from "../Component/NewsLatter";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/allAppsData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, []);

  const sortedApp = data?.sort(
    (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
  );
  const bannerCards = sortedApp?.slice(0, 4) || [];

  const slidesToShow = Math.min(3, bannerCards.length);

  const settings = {
    dots: true,
    infinite: bannerCards.length > slidesToShow,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, bannerCards.length),
          infinite: bannerCards.length > 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, bannerCards.length),
          infinite: bannerCards.length > 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: Math.min(1, bannerCards.length),
          infinite: bannerCards.length > 1,
        },
      },
    ],
  };

  return (
    <div>
      <section
        style={{ backgroundImage: `url(${bgImg})` }}
        className="banner bg-cover min-h-screen bg-center"
      >
        <section className="banner w-11/12 mx-auto py-16">
          <div
            className="bg-gray-800 bg-opacity-90 p-10 pt-20 rounded-2xl 
          shadow-[0_4px_20px_rgba(255,0,0,0.6)]"
          >
            <h2 className="text-blue-600 text-4xl md:text-5xl font-bold mb-4 text-center">
              🔥 Explore Trending <span className="text-red-500">Games</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto text-center my-6 leading-relaxed">
              Enter a world where action, strategy, and adventure unite! Battle
              in shooters and battle royales, explore open worlds, and rise as a
              legend. Challenge players globally, experience stunning visuals,
              and enjoy every thrilling moment. Grab your controller, gear up,
              and start your ultimate gaming journey!
            </p>

            <div className="mt-6 ">
              <Slider {...settings} className="">
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
      <section>
        <h2>All App</h2>
        {/* <div>{
          data?.data.map((app)=>{
            return(
              <
            )
          })
          }</div> */}
      </section>
    </div>
  );
};

export default Home;
