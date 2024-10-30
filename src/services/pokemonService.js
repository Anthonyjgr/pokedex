import axios from 'axios';

const API_BASE_URL = "https://pokeapi.co/api/v2/";

/**
 * Fetches the evolution chain details for a given Pokémon ID.
 * @param {number} id - The ID of the Pokémon to fetch evolution details for.
 * @returns {Object} An object containing abilities, habitat, and growth rate of the Pokémon.
 */

export const fetchPokemonMoreDetails = async (id) => {
  // Initialize an object to hold details about the Pokémon
  let details = {};

  try {
    // Step 1: Fetch Pokémon details to get abilities
    const pokemonResponse = await axios.get(`${API_BASE_URL}pokemon/${id}/`);
    const { abilities } = pokemonResponse.data; // Destructure abilities from the response
    details.abilities = abilities;

    // Step 2: Fetch Pokémon species details to get habitat and growth rate
    const speciesResponse = await axios.get(`${API_BASE_URL}pokemon-species/${id}/`);
    const { habitat, growth_rate } = speciesResponse.data; // Destructure habitat and growth rate
    details.habitat = habitat;
    details.growth_rate = growth_rate;

  } catch (error) {
    // Log any errors encountered during the API calls
    console.error('Error fetching Pokémon details:', error);
    return {}; // Return an empty object in case of an error
  }

  // Return the collected details
  return details;
};
