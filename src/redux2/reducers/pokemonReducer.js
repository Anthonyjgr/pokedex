import { pokemonFilterTypesList } from "../../utils/helpers";

const filters = JSON.parse(localStorage.getItem("filters")) || {};

const initialState = {
  pokemons: [],
  loading: true,
  error: null,
  FilteredPokemons: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  filterInput: filters.input || "",
  filterSort: filters.sort || "lower", // valor predeterminado
  filterType: filters.type || pokemonFilterTypesList,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POKEMONS_SUCCESS":
      return {
        ...state,
        loading: false,
        pokemons: action.payload,
        FilteredPokemons: action.payload,
      };

    case "FILTER":
      const filters = JSON.parse(localStorage.getItem("filters"));
      const filterInput = filters.input;
      const filterSort = filters.sort;
      const filterTypes = filters.types;

      let filteredPokemons = state.pokemons;

      if (filterInput) {
        filteredPokemons = filteredPokemons.filter(
          (poke) =>
            poke.name.includes(filterInput) || poke.id.toString().includes(filterInput)
        );
      }

      // Filtrar por tipos seleccionados
      const selectedTypes = Object.keys(filterTypes).filter((type) => filterTypes[type]);

      if (selectedTypes.length > 0) {
        filteredPokemons = filteredPokemons.filter((poke) =>
          poke.types.some((type) => selectedTypes.includes(type.type.name))
        );
      }

      filteredPokemons = sortFilter(filteredPokemons, filterSort);
      return {
        ...state,
        FilteredPokemons: filteredPokemons,
      };

    case "CLEAR-FILTERS":
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
        FilteredPokemons: state.pokemons,
        filterInput: "",
        filterSort: "lower",
        filterType: {},
      };

    case "TOGGLE_FAVORITE":
      console.log(action.payload);

      // Filtrar el Pokémon seleccionado basándose en el ID
      const selectedPokemon = state.pokemons.find((p) => p.id === action.payload);

      // Verifica si el Pokémon ya está en favoritos
      const isFavorite = state.favorites.some((fav) => fav.id === action.payload);

      const updatedFavorites = isFavorite
        ? state.favorites.filter((fav) => fav.id !== action.payload) // Eliminar si ya está en favoritos
        : [...state.favorites, selectedPokemon]; // Agregar el objeto completo si no está en favoritos

      // Guardar en localStorage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return {
        ...state,
        favorites: updatedFavorites,
      };

    default:
      return state;
  }
};

export default pokemonReducer;

// La función sortFilter ahora se usa correctamente en el case "FILTER"

function sortFilter(pokemons, filter) {
  let sortedPokemons = [...pokemons]; // Crear una copia local para mantener la inmutabilidad

  if (filter === "lower") {
    sortedPokemons.sort((a, b) => a.id - b.id);
  } else if (filter === "highest") {
    sortedPokemons.sort((a, b) => b.id - a.id);
  } else if (filter === "a-z") {
    sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === "z-a") {
    sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    return sortedPokemons;
  }

  return sortedPokemons; // Devolver el arreglo ordenado
}
