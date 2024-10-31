// Import the list of Pokémon filter types from the helpers utility
import { pokemonFilterTypesList } from "../../utils/helpers";

// Retrieve filters from local storage; if none exist, initialize as an empty object
const filters = JSON.parse(localStorage.getItem("filters")) || {};

// Define the initial state of the Pokémon reducer
const initialState = {
  pokemons: [], // Array to hold all fetched Pokémon
  loading: true, // Indicates loading state
  error: null, // Holds any error that occurs during fetch
  FilteredPokemons: [], // Array to hold Pokémon after filtering
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Retrieve favorites from local storage
  filterInput: filters.input || "", // Input for filtering by name or ID
  filterSort: filters.sort || "lower", // Default sort order
  filterType: filters.type || pokemonFilterTypesList, // Types used for filtering Pokémon
};

// The Pokémon reducer function
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle successful fetch of Pokémon
    case "FETCH_POKEMONS_SUCCESS":
      return {
        ...state,
        loading: false, // Set loading to false since data has been fetched
        pokemons: action.payload, // Update the list of all Pokémon
        FilteredPokemons: action.payload, // Initialize filtered Pokémon with all fetched
      };

    // Handle filtering of Pokémon based on input and types
    case "FILTER":
      const filters = JSON.parse(localStorage.getItem("filters")); // Retrieve current filters
      const filterInput = filters.input; // Get the input filter
      const filterSort = filters.sort; // Get the sorting filter
      const filterTypes = filters.types; // Get the selected types for filtering

      let filteredPokemons = state.pokemons; // Start with the complete list of Pokémon

      // Filter by input (name or ID)
      if (filterInput && filterTypes.length > 0) {
        filteredPokemons = filteredPokemons.filter(
          (poke) =>
            poke.name.includes(filterInput) || poke.id.toString().includes(filterInput)
        );
      }else if (filterInput){
        filteredPokemons = state.pokemons.filter(
          (poke) =>
            poke.name.includes(filterInput) || poke.id.toString().includes(filterInput)
        );
      }

      // Filter by selected types
      const selectedTypes = Object.keys(filterTypes).filter((type) => filterTypes[type]);
      if (selectedTypes.length > 0) {
        filteredPokemons = filteredPokemons.filter((poke) =>
          poke.types.some((type) => selectedTypes.includes(type.type.name))
        );
      }

      // Sort the filtered Pokémon based on the specified sorting criteria
      filteredPokemons = sortFilter(filteredPokemons, filterSort);
      return {
        ...state,
        FilteredPokemons: filteredPokemons, // Update the filtered Pokémon in the state
      };

    // Handle clearing of all filters
    case "CLEAR-FILTERS":
      // Reset filters in local storage to default values
      localStorage.setItem(
        "filters",
        JSON.stringify({
          sort: "lower",
          input: "",
          types: {},
        })
      );
      return {
        ...state,
        FilteredPokemons: state.pokemons, // Reset filtered Pokémon to all Pokémon
        filterInput: "", // Reset filter input
        filterSort: "lower", // Reset sorting to default
        filterType: {}, // Reset type filters
      };

    // Handle toggling a Pokémon as a favorite
    case "TOGGLE_FAVORITE":
      // Find the selected Pokémon based on the ID provided in the action
      const selectedPokemon = state.pokemons.find((p) => p.id === action.payload);

      // Check if the selected Pokémon is already in the favorites list
      const isFavorite = state.favorites.some((fav) => fav.id === action.payload);

      // Update the favorites array based on whether the Pokémon is already a favorite
      const updatedFavorites = isFavorite
        ? state.favorites.filter((fav) => fav.id !== action.payload) // Remove it from favorites if it already exists
        : [...state.favorites, selectedPokemon]; // Otherwise, add it to favorites

      // Save updated favorites list to local storage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return {
        ...state,
        favorites: updatedFavorites, // Update the favorites in the state
      };

    // Return current state if action type does not match any case
    default:
      return state;
  }
};

export default pokemonReducer; // Export the reducer for use in the Redux store

// The function sortFilter is used to sort Pokémon based on specified criteria
function sortFilter(pokemons, filter) {
  let sortedPokemons = [...pokemons]; // Create a shallow copy of the Pokémon array to maintain immutability

  // Sort based on the filter criteria
  if (filter === "lower") {
    sortedPokemons.sort((a, b) => a.id - b.id); // Sort by ascending ID
  } else if (filter === "highest") {
    sortedPokemons.sort((a, b) => b.id - a.id); // Sort by descending ID
  } else if (filter === "a-z") {
    sortedPokemons.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name in ascending order
  } else if (filter === "z-a") {
    sortedPokemons.sort((a, b) => b.name.localeCompare(a.name)); // Sort by name in descending order
  } else {
    return sortedPokemons; // Return the unsorted list if no valid filter is provided
  }

  return sortedPokemons; // Return the sorted Pokémon array
}
