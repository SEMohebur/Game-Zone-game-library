import logo from "../assets/loginPageImg-removebg-preview.png";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { ImNewspaper } from "react-icons/im";
import * as motion from "motion/react-client";

const NewsLatter = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4">
      <div className=" w-11/12 mx-auto ">
        <h2 className=" flex justify-center">
          <ImNewspaper className=" mb-15 size-20" />
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className=" flex gap-3 flex-col md:flex-row justify-between items-center "
        >
          {/* left  */}
          <div className=" flex-1 ">
            <div className=" flex justify-center mb-5">
              <img
                className=" h-40 rounded-full border-4 text-lime-500"
                src={logo}
                alt=""
              />
            </div>

            <p className=" text-gray-300">
              Game Zone is a modern online gaming platform where users can
              explore, play, and rate popular and new games. It offers various
              game categories and detailed developer information, creating an
              exciting and immersive experience for all gaming enthusiasts.
            </p>
          </div>
          {/* right  */}
          <div className=" flex-1 ">
            <div>
              <h2 className=" font-bold text-xl text-lime-500">
                Diverse Game Collection
              </h2>
              <p className=" text-amber-800">
                – Explore a wide range of trending, action, strategy, and
                adventure games in one place.
              </p>
            </div>
            <div>
              <h2 className=" font-bold text-xl text-lime-500">
                User Ratings & Reviews
              </h2>
              <p className=" text-amber-800">
                -Easily find the best games based on community ratings and
                player feedback.
              </p>
            </div>
            <div>
              <h2 className=" font-bold text-xl text-lime-500">
                Interactive UI Design
              </h2>
              <p className=" text-amber-800">
                – Enjoy a smooth, modern, and responsive interface built for an
                immersive gaming experience.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-lime-500">User-friendly</h2>
              <p className="text-amber-800">
                – Where players can easily find games, review ports, and explore
                gameplay.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLatter;
