import React, { useEffect, useState } from "react";
import {
  pokemonTypesList,
  whiteTextColors,
} from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { filter } from "../../redux2/actions/filterActions";

const PokemonTypeSearch = ({ resetTypes, setResetTypes }) => {
  // Initialize `selectedTypes` from local storage or default it to an empty object
  const [selectedTypes, setSelectedTypes] = useState(() => {
    const filters = localStorage.getItem("filters");
    const parsedFilters = JSON.parse(filters);
    return parsedFilters.types;
  });

  const dispatch = useDispatch();

  // Toggles the selection of a Pokémon type
  const handleToggleType = (type) => {
    setSelectedTypes((prevSelectedTypes) => ({
      ...prevSelectedTypes,
      [type]: !prevSelectedTypes[type],
    }));
  };

  // Resets `selectedTypes` when `resetTypes` is triggered
  useEffect(() => {
    if (resetTypes) {
      setSelectedTypes(
        pokemonTypesList.reduce((acc, type) => ({ ...acc, [type]: false }), {})
      );
      setResetTypes(false); // Disable reset after applying
    }
  }, [resetTypes, setResetTypes]);

  // Syncs `selectedTypes` with Redux filter whenever it changes
  useEffect(() => {
    dispatch(filter(selectedTypes, "types"));
  }, [dispatch, selectedTypes]);

  return (
    <aside
      aria-labelledby="type-filter-heading"
      className="flex flex-col items-start justify-start w-full "
    >
      <h2
        id="type-filter-heading"
        className="text-lg font-semibold dark:text-gray-300 text-gray-500 py-2 text-center w-full"
      >
        Filter by Type
      </h2>

      {/* Map through the list of Pokémon types to generate a button for each type */}
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        {pokemonTypesList.map((type) => (
          <button
            key={type}
            type="button"
            // Dynamically apply background and text color based on selection status
            className={`p-1 px-3 text-gray-500 rounded-lg text-[14px] w-full border dark:border-transparent  ${
              selectedTypes[type] ? `bg-${type}-light` : "bg-gray-50 dark:bg-gray-600"
            } ${
              selectedTypes[type] && whiteTextColors.includes(type)
                ? "text-white"
                : "text-black dark:text-gray-300"
            } hover:bg-red-500 dark:hover:bg-red-500 hover:text-gray-200`}
            onClick={() => handleToggleType(type)}
          >
            {/* Capitalize the first letter of the type for display */}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default PokemonTypeSearch;
