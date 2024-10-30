import PokemonStats from "../common/PokemonStats";
import {  textClasses } from "../../utils/helpers";
import PokemonDimensions from "./PokemonDimensions";
import { useSelector } from "react-redux";

const PokemonDetailCard = ({pokemon}) => {

  const isDarkMode = useSelector((state) => state.ui.isDarkMode)
  const poke = pokemon 

  function capitalizeFirstLetter(str) {
    if (!str) return ""; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //getting the type of pkemon
  const pokeType = poke?.types[0].type?.name;
  //getting the types of pkemon to iterate later easely
  const pokeTypes = poke?.types;
  //the poke type is related to the poke color, we instance "pokeType" here in "pokeColor" just for better code understanding (see tailwind config file)
  const pokeColor = pokeType;

  const textColor = textClasses[pokeType] || "text-gray-200";
  const isNormal = pokeType === "normal"
  // console.log(pokeColor)


  // console.log(pokeColor);
  return (
    <div
      className={`flex flex-col p-2 w-full max-w-[360px] bg-${pokeColor}-light relative rounded-lg`}
    >
      <div
        className={`flex flex-row items-center justify-between px-6 text-${
          pokeColor + "-dark"
        } mt-4`}
      >
        <h1 className="flex font-bold text-xl">{capitalizeFirstLetter(poke?.name)}</h1>
        <h2 className="flex font-semibold">{poke?.id}</h2>
      </div>
      {/* POKEMON IMAGE */}
      <img
        src={poke?.sprites}
        alt={"image of " + poke?.name}
        className="w-[200px] max-h-[200px] absolute top-24 left-1/2 transform -translate-x-1/2 z-10"
        draggable={false}
      />
      {/* POKEBALL BACKGROUND IMAGE */}
      <img
        src="/pokeball-icon.svg"
        alt="pokeball icon"
        className="w-[200px]  absolute right-4 opacity-10"
        draggable={false}
      />
      {/* POKE DETAILS CONTAINER */}
      <div
        className={`fex flex-col items-center justify-center p-4 mt-[200px] bg-${
          isDarkMode ? pokeColor + "-dark" : "white"
        } rounded-lg ${isDarkMode && isDarkMode ? "bg-gray-700" : ""}`}
      >
        {/* POKE TYPES */}
        <div className="flex flex-row gap-6 items-center justify-center mt-10">
          {pokeTypes?.map((t) => (
            <div
              className={`bg-${t.type.name}-light p-1 px-3 rounded-full z-10 text-sm text-white`}
              key={t.type.name}
            >
              {capitalizeFirstLetter(t.type.name)}
            </div>
          ))}
        </div>
        <h3 className={`${textColor} text-center p-6 font-semibold text-lg`}>
          About
        </h3>
        <div className="mb-4">
          <PokemonDimensions
            weight={poke?.weight}
            height={poke?.height}
            textColor={textColor}
            isDark={isDarkMode}
          />
        </div>
        <div>
          <PokemonStats stats={poke?.stats} color={pokeColor} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
