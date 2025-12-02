import React, { useEffect, useState } from "react";
import Card from "../Component/Card";

const AllGame = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/allAppsData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
    //dynamic tap name set
    document.title = "All Game | Gaming Zone";
  }, []);

  console.log(data);
  return (
    <div className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900">
      <div className="w-11/12 mx-auto pb-5">
        <h2 className="text-4xl font-bold text-center text-lime-500 py-5 ">
          All Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {data?.map((game) => {
            return <Card key={game.id} game={game}></Card>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllGame;
