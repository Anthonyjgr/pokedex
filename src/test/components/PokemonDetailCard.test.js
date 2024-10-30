import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PokemonDetailCard from '../../components/pokemon/PokemonDetailCard';
import rootReducer from '../../redux2/reducers/pokemonReducer'; // Make sure this is the correct path to your reducer

// Initial state for the test
const initialState = {
    pokemon: {
        pokemons: [],  // You can add Pokémon here if needed
        loading: false,
        error: null,
        FilteredPokemons: [],
        favorites: [],
        filterInput: "",
        filterSort: "lower",
        filterType: [],
    },
    ui: {
        isDarkMode: false, // or true, depending on how you want your test to start
    },
};

// Create the store using the initial state
const store = createStore(rootReducer, initialState);

// Test data for the Pokémon
const mockPokemon = {
    id: 1,
    name: 'bulbasaur',
    types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
    sprites: 'https://pokeapi.co/media/sprites/pokemon/1.png',
    weight: 69,
    height: 7,
    stats: [],
};

describe('PokemonDetailCard', () => {
    it('renders correctly with given pokemon data', () => {
        const { getByText, getByAltText } = render(
            <Provider store={store}>
                <PokemonDetailCard pokemon={mockPokemon} />
            </Provider>
        );

        // Check that the name is displayed correctly
        expect(getByText(/bulbasaur/i)).toBeInTheDocument();

        // Check that the ID is displayed correctly
        expect(getByText(/1/i)).toBeInTheDocument();

        // Check that the Pokémon image loads
        const image = getByAltText(/image of bulbasaur/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://pokeapi.co/media/sprites/pokemon/1.png');

        // Check that the Pokémon types are displayed
        expect(getByText(/grass/i)).toBeInTheDocument();
        expect(getByText(/poison/i)).toBeInTheDocument();
    });

    // New test case for error handling
    it('shows error message when no valid pokemon data is provided', () => {
        const { getByText } = render(
            <Provider store={store}>
                <PokemonDetailCard pokemon={{}} /> {/* Pokémon with no types */}
            </Provider>
        );

        expect(getByText(/Failed to get Pokémon data/i)).toBeInTheDocument();
    });

    it('shows error message when pokemon is undefined', () => {
        const { getByText } = render(
            <Provider store={store}>
                <PokemonDetailCard pokemon={undefined} /> {/* Undefined Pokémon */}
            </Provider>
        );

        expect(getByText(/Failed to get Pokémon data/i)).toBeInTheDocument();
    });
});
