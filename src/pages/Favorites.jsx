import React from "react";
import { useSelector } from "react-redux";
import PokemonSmallCard from "../components/pokemon/PokemonSmallCard";

const Favorites = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const favorites =  JSON.parse(localStorage.getItem("favorites"))

  console.log(favorites)
  


  return (
    <div
      className={`flex flex-col items-center justify-start w-screen min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <h1 className="text-[60px] font-bold mt-10 text-primary">My Favs</h1>
      <div className="flex-col-center w-5/6">
        {favorites.length > 0 ? (
          <div className="grid mt-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {favorites?.map((poke) => (
              <PokemonSmallCard
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
