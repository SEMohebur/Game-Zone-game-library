import React, { useEffect, useState } from "react";
import Card from "../Component/Card";

const AllGame = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/allAppsData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));

    document.title = "All Game | Gaming Zone";
  }, []);

  let filteredGame = data.filter((game) =>
    game.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (sortOrder === "asc") {
    filteredGame.sort((a, b) => Number(a.ratings) - Number(b.ratings));
  }

  if (sortOrder === "desc") {
    filteredGame.sort((a, b) => Number(b.ratings) - Number(a.ratings));
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900">
      <div className="w-11/12 mx-auto py-5 ">
        <div className="bg-gray-100 py-2 rounded-2xl mb-3">
          {/* Title */}
          <h2 className="text-4xl font-bold text-center text-lime-500 mb-2">
            <span className="text-gray-700">All</span> Games
          </h2>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6">
            {/* Search Box */}
            <div className="join w-full md:w-auto">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                type="text"
                placeholder="Search games..."
                className="input input-bordered join-item w-full md:w-80 text-gray-600"
              />
              <button className="btn bg-lime-500 text-white hover:bg-lime-600 join-item border-none">
                Search
              </button>
            </div>

            {/* Rating Sorting Dropdown */}
            <div className="dropdown dropdown-end text-gray-700">
              <div tabIndex={0} role="button" className="btn">
                Sort by Rating ⬇️
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white border rounded-xl shadow-md w-52 p-2"
              >
                <li onClick={() => setSortOrder("asc")}>
                  <a>Low to High </a>
                </li>
                <li onClick={() => setSortOrder("desc")}>
                  <a>High to Low </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredGame.length > 0 ? (
            filteredGame.map((game) => <Card key={game.id} game={game} />)
          ) : (
            <h2 className="col-span-full text-center text-red-500 text-xl py-5">
              ⚠️ No Games Found
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllGame;
