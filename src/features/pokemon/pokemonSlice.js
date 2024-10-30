import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemons } from '../../services/pokemonService';

export const getPokemons = createAsyncThunk('pokemon/getPokemons', async (page) => {
  const response = await fetchPokemons(page);
  return response;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload.results;
      })
      .addCase(getPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default pokemonSlice.reducer;
