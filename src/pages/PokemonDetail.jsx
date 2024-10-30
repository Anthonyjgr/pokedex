import React from "react";
import PokemonDetailCard from "../components/pokemon/PokemonDetailCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PokemonDetail = () => {
  const { id } = useParams(); // Obtiene el id de los parámetros de la URL
  const pokemons = useSelector((state) => state.pokemon.pokemons); // Accede a tu estado de pokémons
  const isDarkMode = useSelector((state) => state.ui.isDarkMode); // Accede a tu estado de pokémons

  // Asegúrate de que 'pokemons' sea un array
  if (!Array.isArray(pokemons)) {
    return <div>Loading...</div>; // O muestra un spinner o un mensaje de carga
  }

  // Filtra el Pokémon correspondiente al id
  const pokemon = pokemons.find((poke) => poke.id === parseInt(id)); // Convierte el id a número

  if (!pokemon) {
    return <div>Pokémon no encontrado</div>; // Manejo si no se encuentra el Pokémon
  }

  const pokeType = pokemon?.types[0].type?.name;
  const isNormal = pokeType === "normal";

  return (
    <div>
      <div
        className={`flex-col-center  absolute top-0 w-full min-h-screen pt-20 ${
          isDarkMode ? "bg-" + pokeType + "-dark" : ""
        }
    ${isNormal && isDarkMode ? "bg-gray-700" : ""}
    `}
      >
        <PokemonDetailCard pokemon={pokemon} />
      </div>
      {/* THIS CONTAINER IS FOR OULLING THE FOOTER TO THE BOTTON WHEN WE ARE IN DETAILS ROUTE */}
      <div className="min-h-screen w-screen dark:bg-gray-900"></div>
    </div>
  );
};

export default PokemonDetail;
