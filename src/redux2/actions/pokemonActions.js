import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2/";
import icon from "/pokeball-icon.png"

export const fetchPokemons = () => async (dispatch) => {
  dispatch({ type: "FETCH_POKEMONS_REQUEST" });

  try {
    const allPokemons = [];
    let offset = 0;
    const limit = 300; // Límite de Pokémon por solicitud
    let keepFetching = true;

    while (keepFetching) {
      const response = await axios.get(`${API_BASE_URL}pokemon?limit=${limit}&offset=${offset}`);
      const pokeList = response.data.results;

      if (pokeList.length > 0) {
        const pokemons = await Promise.all(
          pokeList.map(async (poke) => {
            const pokeDetails = await axios.get(poke.url);
            const pokemon = pokeDetails.data;
            return {
              id: pokemon.id,
              name: pokemon.name,
              stats: pokemon.stats,
              types: pokemon.types,
              sprites: pokemon.sprites.other.dream_world.front_default || pokemon.sprites.other.home.front_default || icon,
              weight: pokemon.weight,
              height: pokemon.height,
              abilities: pokemon.abilities,
            };
          })
        );

        allPokemons.push(...pokemons); // Añadir los Pokémon obtenidos a la lista completa
        offset += limit; // Incrementar el offset para la próxima llamada
        keepFetching = false
      } else {
        keepFetching = false; // Detener si no hay más Pokémon
      }
    }

    dispatch({ type: "FETCH_POKEMONS_SUCCESS", payload: allPokemons }); // Despachar todos los Pokémon
  } catch (error) {
    dispatch({ type: "FETCH_POKEMONS_FAILURE", payload: error.message });
  }
};

export const favPokemon = (pokemonId) =>{
  return {
    type: "TOGGLE_FAVORITE",
    payload: pokemonId,
  };
}

