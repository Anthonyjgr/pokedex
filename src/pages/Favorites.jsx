import React from "react";
import { useSelector } from "react-redux";
import PokemonSmallCard from "../components/pokemon/PokemonSmallCard";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const navigate = useNavigate()

  return (
    <div
      className={`flex flex-col items-center justify-start w-screen min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <button
        className={`z-30 bg-primary text-white dark:bg-gray-300 dark:text-black rounded-lg p-2 px-4 mt-6 hover`}
        onClick={() => navigate("/home")}
      >
        Back to home
      </button>
      <h1 className="text-[60px] font-bold text-primary">My Favs</h1>
      <div className="flex-col-center w-5/6">
        {favorites.length > 0 ? (
          <div className="grid mt-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {favorites?.map((poke) => (
              <PokemonSmallCard
                key = {poke?.id}
                image={poke?.sprites}
                id={poke?.id}
                types={poke?.types}
                name={poke?.name}
                principalType={poke?.types[0].type.name}
              />
            ))}
          </div>
        ) : (
          <span>Go to home and Choose your Favoutie Pokemos</span>
        )}
      </div>
    </div>
  );
};

export default Favorites;
