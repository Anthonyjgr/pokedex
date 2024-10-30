import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';


const API_BASE_URL = "https://pokeapi.co/api/v2/";

// export const fetchPokemons = async (page = 1) => {
//   const response = await axios.get(
//     `${API_BASE_URL}pokemon?limit=20&offset=${(page - 1) * 20}`
//   );
//   const pokeList = response.data.results;

//   const pokeDetailFecth = pokeList.map(async (poke) => {
//     const pokeDetails = await axios.get(poke.url);
//     const pokemon = pokeDetails.data;
//     // console.log(pokemon)
//     return {
//       id: pokemon.id,
//       name: pokemon.name,
//       stats: pokemon.stats,
//       types: pokemon.types,
//       sprites: pokemon.sprites.other.dream_world.front_default,
//       weight: pokemon.weight,
//       height: pokemon.height,
//       abilities: pokemon.abilities,

//     };
//   });

//   // console.log(await Promise.all(pokeDetailFecth))
//   return await Promise.all(pokeDetailFecth);
// };


// src/services/pokemonService.js



export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}pokemon?limit=20&offset=${(page - 1) * 20}`
      );
      const pokeList = response.data.results;
      
      const pokeDetailsFetch = pokeList.map(async (poke) => {
        const pokeDetails = await axios.get(poke.url);
        const pokemon = pokeDetails.data;
        return {
          id: pokemon.id,
          name: pokemon.name,
          stats: pokemon.stats,
          types: pokemon.types,
          sprites: pokemon.sprites.other.dream_world.front_default,
          weight: pokemon.weight,
          height: pokemon.height,
          abilities: pokemon.abilities,
        };
      });

      const pokemons=  await Promise.all(pokeDetailsFetch);
      // console.log(pokemons)
      return pokemons
    } catch (error) {
      console.error("Error fetching pokemons:", error); // Añadir esta línea
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);






