import axios from 'axios';
import { fetchPokemons } from '../../redux2/actions/pokemonActions'; // Adjust the path according to your file structure
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

// Setting up middleware for the mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Mocking axios to prevent actual API calls
jest.mock('axios');

describe('fetchPokemons action', () => {
  
  // Test case for successful API call
  it('dispatches FETCH_POKEMONS_SUCCESS after a successful API call', async () => {
    // Mock data for Bulbasaur's details
    const bulbasaurDetails = {
      id: 1,
      name: "bulbasaur",
      stats: [],
      types: [
        { type: { name: "grass" } },
        { type: { name: "poison" } },
      ],
      sprites: "test-file-stub", // Placeholder for testing
      weight: 69,
      height: 7,
      abilities: [],
    };

    // Mock data for Ivysaur's details
    const ivysaurDetails = {
      id: 2,
      name: "ivysaur",
      stats: [],
      types: [
        { type: { name: "grass" } },
        { type: { name: "poison" } },
      ],
      sprites: "test-file-stub", // Placeholder for testing
      weight: 130,
      height: 10,
      abilities: [],
    };

    // Create a mock store
    const store = mockStore({});
    
    // Mock the first API call to get the list of Pokémon
    axios.get.mockResolvedValueOnce({
      data: {
        results: [
          { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
          { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" }
        ]
      }
    });

    // Mock the subsequent API calls to get the details of each Pokémon
    axios.get.mockResolvedValueOnce({ data: bulbasaurDetails });
    axios.get.mockResolvedValueOnce({ data: ivysaurDetails });

    // Dispatch the fetchPokemons action
    await store.dispatch(fetchPokemons());

    // Retrieve the dispatched actions
    const actions = store.getActions();

    // Assert that the FETCH_POKEMONS_REQUEST action was dispatched
    expect(actions[0]).toEqual({ type: 'FETCH_POKEMONS_REQUEST' });

    // Assert that the FETCH_POKEMONS_SUCCESS action was dispatched with the correct payload
    expect(actions[1]).toEqual({
      type: 'FETCH_POKEMONS_SUCCESS',
      payload: [bulbasaurDetails, ivysaurDetails],
    });
  });

  // Test case for handling a failed API call
  it('dispatches FETCH_POKEMONS_FAILURE after a failed API call', async () => {
    // Create a mock store
    const store = mockStore({});
    
    // Mock axios to simulate a network error
    axios.get.mockRejectedValueOnce(new Error('Network Error'));
  
    // Dispatch the fetchPokemons action
    await store.dispatch(fetchPokemons());
  
    // Retrieve the dispatched actions
    const actions = store.getActions();

    // Assert that the FETCH_POKEMONS_REQUEST action was dispatched
    expect(actions[0]).toEqual({ type: 'FETCH_POKEMONS_REQUEST' });

    // Assert that the FETCH_POKEMONS_FAILURE action was dispatched with the correct error message
    expect(actions[1]).toEqual({
      type: 'FETCH_POKEMONS_FAILURE',
      payload: 'Network Error',
    });
  });
});
