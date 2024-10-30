import React, { useEffect, useState } from "react";
import PokemonTypeSearch from "./PokemonTypeSearch";
import PokemonSort from "./PokemonSort";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../redux2/actions/filterActions";
import { Link } from "react-router-dom";

const PokemonFilters = ({ handleOpen }) => {
  const dispatch = useDispatch();
  const [resetTypes, setResetTypes] = useState(false); // State to track type reset status

  // Handler to clear all filters
  const handleClearFilter = () => {
    setResetTypes(true); // Trigger type reset in PokemonTypeSearch
    dispatch(clearFilters()); // Dispatch action to clear Redux filters
  };

  return (
    <div className="flex flex-col w-full bg-white dark:bg-gray-700 rounded-lg">
      {/* Desktop Version of the Filter */}
      <div className="hidden lg:flex flex-col w-full bg-white dark:bg-gray-700 p-4 rounded-lg relative">
        
        {/* Link to Favorite Pokémon Page */}
        <Link to="/fav">
          <button className="text-sm bg-primary hover:bg-red-700 text-white rounded-lg p-2 w-full mb-4 relative">
            <img src="/fav-white.svg" alt="fav icon" className="absolute" />
            My Favs
          </button>
        </Link>
        
        {/* Button to Clear All Filters */}
        <button
          className="text-sm bg-white dark:bg-gray-500 border dark:border-transparent text-gray-500 dark:text-white rounded-lg p-2 w-full"
          onClick={handleClearFilter}
        >
          Clear filters
        </button>
        
        {/* Sort Dropdown Component */}
        <PokemonSort resetFilters={resetTypes} />
        
        {/* Type Filter Component with Reset Capability */}
        <PokemonTypeSearch resetTypes={resetTypes} setResetTypes={setResetTypes} />
      </div>

      {/* Mobile Version of the Filter */}
      <div className="flex flex-col w-full dark:bg-gray-700 p-4 lg:hidden relative">
        
        {/* Close Button for Mobile Filter Drawer */}
        <button onClick={handleOpen} className="absolute top-4 right-4">
          <img src="/close-icon.svg" alt="close menu icon" className="w-8" />
        </button>
        
        {/* Link to Favorite Pokémon Page */}
        <Link to="/fav">
          <button className="text-sm bg-primary hover:bg-red-700 text-white rounded-lg p-3 gap-2 flex items-center justify-center">
            <img src="/fav-white.svg" alt="fav icon" />
            My Favs
          </button>
        </Link>
        
        {/* Clear Filters Button */}
        <button
          className="text-sm bg-white mt-8 dark:bg-gray-500 border dark:border-transparent text-gray-500 dark:text-white rounded-lg p-2 w-full"
          onClick={handleClearFilter}
        >
          Clear filters
        </button>
        
        {/* Sort and Type Filter Components for Mobile */}
        <PokemonSort resetFilters={resetTypes} />
        <PokemonTypeSearch resetTypes={resetTypes} setResetTypes={setResetTypes} />
      </div>
    </div>
  );
};

export default PokemonFilters;
