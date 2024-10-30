import axios from "axios"; // Import axios for making HTTP requests

const API_BASE_URL = "https://pokeapi.co/api/v2/"; // Base URL for the Pokémon API
import icon from "/pokeball-icon.png"; // Default icon for Pokémon images, in case none are available

// Action creator to fetch all Pokémon from the API
export const fetchPokemons = () => async (dispatch) => {
  dispatch({ type: "FETCH_POKEMONS_REQUEST" }); // Dispatch action indicating that the fetch request has started

  try {
    const allPokemons = []; // Array to hold all fetched Pokémon data
    let offset = 0; // Initialize offset for pagination
    const limit = 1302; // Set limit of Pokémon to fetch per request
    let keepFetching = true; // Flag to control the fetching loop

    // Loop to fetch Pokémon data until there are no more to fetch
    while (keepFetching) {
      // Make API call to get a list of Pokémon
      const response = await axios.get(
        `${API_BASE_URL}pokemon?limit=${limit}&offset=${offset}` // Construct URL for fetching Pokémon
      );
      const pokeList = response.data.results; // Extract Pokémon list from response

      // If there are Pokémon in the fetched list, process them
      if (pokeList.length > 0) {
        // Fetch detailed information for each Pokémon concurrently
        const pokemons = await Promise.all(
          pokeList.map(async (poke) => {
            // Fetch individual Pokémon details using its URL
            const pokeDetails = await axios.get(poke.url); // Make an API call to get details
            const pokemon = pokeDetails.data; // Extract the detailed data

            // Structure the relevant Pokémon data to be stored
            return {
              id: pokemon.id, // Pokémon ID
              name: pokemon.name, // Pokémon name
              stats: pokemon.stats, // Pokémon stats
              types: pokemon.types, // Pokémon types
              // Get the appropriate sprite or default icon if none available
              sprites: pokemon.sprites?.other?.dream_world?.front_default || 
                       pokemon.sprites?.other?.home?.front_default || icon,
              weight: pokemon.weight, // Pokémon weight
              height: pokemon.height, // Pokémon height
              abilities: pokemon.abilities, // Pokémon abilities
            };
          })
        );

        allPokemons.push(...pokemons); // Add the fetched Pokémon to the complete list
        offset += limit; // Increase offset for the next API request
        keepFetching = false; // Exit the fetching loop if all Pokémon have been retrieved
      } else {
        // No more Pokémon to fetch, exit the loop
        keepFetching = false; // Stop if no more Pokémon
      }
    }

    // Dispatch success action with the fetched Pokémon data
    dispatch({ type: "FETCH_POKEMONS_SUCCESS", payload: allPokemons }); // Dispatch the action with the fetched Pokémon
  } catch (error) {
    // Handle the error properly
    dispatch({ type: "FETCH_POKEMONS_FAILURE", payload: error.message }); // Dispatch failure action with the error message
  }
};

// Action creator to toggle a Pokémon's favorite status
export const favPokemon = (pokemonId) => {
  return {
    type: "TOGGLE_FAVORITE", // Action type for toggling favorites
    payload: pokemonId, // Pokémon ID to toggle
  };
};
