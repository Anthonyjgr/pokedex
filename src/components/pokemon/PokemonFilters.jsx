import React, { useEffect, useState } from "react";
import PokemonTypeSearch from "./PokemonTypeSearch";
import PokemonSort from "./PokemonSort";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../redux2/actions/filterActions";
import { Link } from "react-router-dom";
import SmallPokeball from "../common/SmallPokeball";

const PokemonFilters = ({ handleOpen }) => {
  const dispatch = useDispatch();
  const [resetTypes, setResetTypes] = useState(false); // Estado para resetear filtros

  const handleClearFilter = () => {
    setResetTypes(true); // Activa el reset de tipos en PokemonTypeSearch
    dispatch(clearFilters());
  };

  return (
    <div className="flex flex-col w-full bg-white dark:bg-gray-700  rounded-lg ">
      <div className="hidden lg:flex flex-col w-full bg-white dark:bg-gray-700 p-4 rounded-lg relative">
      {/* <div className="h-[170px] absolute top-[-270px] left-1/2 -translate-x-1/2 Z-10">
        <SmallPokeball />
      </div> */}
      {/* SPACER FOR PROPPERLY RENDER THE 3D POKEBALL GIVING IT SPACE*/}
      {/* <div className="h-[35px] w-full"></div> */}
        <Link to="/fav">
          <button className="text-sm bg-primary hover:bg-red-700 text-white rounded-lg p-2 w-full mb-4 relative">
            <img src="/fav-white.svg" alt="fav icon" className="absolute" />
            My Favs
          </button>
        </Link>
        <button
          className="text-sm bg-white dark:bg-gray-500 border dark:border-transparent text-gray-500 dark:text-white rounded-lg p-2 w-full"
          onClick={handleClearFilter}
        >
          Clear filters
        </button>
        <PokemonSort resetFilters={resetTypes} />
        <PokemonTypeSearch resetTypes={resetTypes} setResetTypes={setResetTypes} />
      </div>

      {/* MOBILE VERSION */}
      <div className="flex flex-col w-full  dark:bg-gray-700 p-4 lg:hidden relative">
        <button onClick={handleOpen} className="absolute top-4 right-4">
          <img src="/close-icon.svg" alt="close menu icon" className="w-8" />
        </button>
        <Link to="/fav">
            <button className="text-sm bg-primary hover:bg-red-700 text-white rounded-lg p-3 gap-2  flex items-center justify-center  ">
              <img src="/fav-white.svg" alt="fav icon" className="" />
              My Favs
            </button>
          </Link>
        <button
          className="text-sm bg-white mt-8 dark:bg-gray-500 border dark:border-transparent text-gray-500 dark:text-white rounded-lg p-2 w-full"
          onClick={handleClearFilter}
        >
          Clear filters
        </button>
        <PokemonSort resetFilters={resetTypes} />
        <PokemonTypeSearch resetTypes={resetTypes} setResetTypes={setResetTypes} />
      </div>
    </div>
  );
};

export default PokemonFilters;
