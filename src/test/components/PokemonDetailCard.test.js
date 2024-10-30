// // src/test/components/PokemonDetailCard.test.js
// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import PokemonDetailCard from '../../components/pokemon/PokemonDetailCard';
// import rootReducer from '../../redux2/reducers/pokemonReducer'; // Asegúrate de que esta es la ruta correcta de tu reducer

// // Estado inicial para el test
// const initialState = {
//     pokemon: {
//         pokemons: [],  // Puedes añadir Pokémones si lo necesitas
//         loading: false,
//         error: null,
//         FilteredPokemons: [],
//         favorites: [],
//         filterInput: "",
//         filterSort: "lower",
//         filterType: [],
//         isDarkMode: "light", // o "dark", según necesites
//     },
//     ui: {
//         isDarkMode: false, // o true, dependiendo de cómo desees que inicie tu test
//     },
// };

// // Crear el store usando el estado inicial
// const store = createStore(rootReducer, initialState);

// // Datos de prueba para el Pokémon
// const mockPokemon = {
//     id: 1,
//     name: 'bulbasaur',
//     types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
//     sprites: 'https://pokeapi.co/media/sprites/pokemon/1.png',
//     weight: 69,
//     height: 7,
//     stats: [],
// };

// describe('PokemonDetailCard', () => {
//     it('renders correctly with given pokemon data', () => {
//         const { getByText, getByAltText } = render(
//             <Provider store={store}>
//                 <PokemonDetailCard pokemon={mockPokemon} />
//             </Provider>
//         );

//         // Comprobar que el nombre se muestra correctamente
//         expect(getByText(/bulbasaur/i)).toBeInTheDocument();

//         // Comprobar que la id se muestra correctamente
//         expect(getByText(/1/i)).toBeInTheDocument();

//         // Comprobar que la imagen del Pokémon se carga
//         const image = getByAltText(/image of bulbasaur/i);
//         expect(image).toBeInTheDocument();
//         expect(image).toHaveAttribute('src', 'https://pokeapi.co/media/sprites/pokemon/1.png');

//         // Comprobar que los tipos de Pokémon se muestran
//         expect(getByText(/grass/i)).toBeInTheDocument();
//         expect(getByText(/poison/i)).toBeInTheDocument();
//     });
// });

// src/test/components/PokemonDetailCard.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PokemonDetailCard from '../../components/pokemon/PokemonDetailCard';
import rootReducer from '../../redux2/reducers/pokemonReducer'; // Asegúrate de que esta es la ruta correcta de tu reducer

// Estado inicial para el test
const initialState = {
    pokemon: {
        pokemons: [],  // Puedes añadir Pokémones si lo necesitas
        loading: false,
        error: null,
        FilteredPokemons: [],
        favorites: [],
        filterInput: "",
        filterSort: "lower",
        filterType: [],
        isDarkMode: "light", // o "dark", según necesites
    },
    ui: {
        isDarkMode: false, // o true, dependiendo de cómo desees que inicie tu test
    },
};

// Crear el store usando el estado inicial
const store = createStore(rootReducer, initialState);

// Datos de prueba para el Pokémon
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

        // Comprobar que el nombre se muestra correctamente
        expect(getByText(/bulbasaur/i)).toBeInTheDocument();

        // Comprobar que la id se muestra correctamente
        expect(getByText(/1/i)).toBeInTheDocument();

        // Comprobar que la imagen del Pokémon se carga
        const image = getByAltText(/image of bulbasaur/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://pokeapi.co/media/sprites/pokemon/1.png');

        // Comprobar que los tipos de Pokémon se muestran
        expect(getByText(/grass/i)).toBeInTheDocument();
        expect(getByText(/poison/i)).toBeInTheDocument();
    });

    // Nuevo caso de prueba para manejo de errores
    it('shows error message when no valid pokemon data is provided', () => {
        const { getByText } = render(
            <Provider store={store}>
                <PokemonDetailCard pokemon={{}} /> {/* Pokémon sin tipos */}
            </Provider>
        );

        expect(getByText(/Failed to get Pokémon data/i)).toBeInTheDocument();
    });

    it('shows error message when pokemon is undefined', () => {
        const { getByText } = render(
            <Provider store={store}>
                <PokemonDetailCard pokemon={undefined} /> {/* Pokémon indefinido */}
            </Provider>
        );

        expect(getByText(/Failed to get Pokémon data/i)).toBeInTheDocument();
    });
});
