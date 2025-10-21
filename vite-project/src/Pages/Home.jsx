import React, { useEffect, useState } from "react";
import bgImg from "../assets/5405317.jpg";
import AppCard from "../Component/AppCard";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/allAppsData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" bg-cover min-h-screen bg-center"
    ></div>
  );
};

export default Home;
