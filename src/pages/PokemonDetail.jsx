import React, { useEffect, useState } from "react";
import PokemonDetailCard from "../components/pokemon/PokemonDetailCard";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchPokemonMoreDetails } from "../services/pokemonService";
import PokemonExtendedDeatils from "../components/pokemon/PokemonExtendedDeatils";
import Loader from "../components/common/Loader";

const PokemonDetail = () => {
  const [moreDetails, setMoreDetails] = useState();
  const { id } = useParams(); // Get ID from URL parameters
  const pokemons = useSelector((state) => state.pokemon.pokemons); // Access Pokémon state
  const isDarkMode = useSelector((state) => state.ui.isDarkMode); // Access dark mode state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoreDetails = async () => {
      try {
        const data = await fetchPokemonMoreDetails(id); // Fetch additional details
        setMoreDetails(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching evolution data:", error); // Log error if fetch fails
        setMoreDetails(null); // Optionally reset state on error
      }
    };

    fetchMoreDetails();
  }, [id]); // Refetch data if ID changes

  // Find the Pokémon corresponding to the ID
  const pokemon = pokemons.find((poke) => poke.id === parseInt(id)); // Convert ID to number

  if (!pokemon) {
    return <div>Pokémon not found</div>; // Handle Pokémon not found case
  }

  // Show Loader if moreDetails is still loading (undefined)
  if (moreDetails === undefined) {
    return <Loader />;
  }

  const pokeType = pokemon?.types[0].type?.name;
  const isNormal = pokeType === "normal";

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className={`z-30 bg-primary text-white dark:bg-gray-300 dark:text-black rounded-lg p-2 px-4 mt-4 hover`}
        onClick={() => navigate("/home")}
      >
        Back to home
      </button>
      <div
        className={`flex flex-row items-start flex-wrap justify-center absolute top-0 w-full min-h-screen pt-[165px] md:pt-[200px] gap-10 ${
          isDarkMode ? "bg-" + pokeType + "-dark" : "bg-gray-100"
        }${isNormal && isDarkMode ? "bg-gray-700" : ""}`}
      >
        <PokemonDetailCard pokemon={pokemon} />
        <PokemonExtendedDeatils extendedDetails={moreDetails} color={pokeType} />
      </div>
      {/* Container for footer spacing in detail route */}
      <div className="min-h-screen w-screen dark:bg-gray-900"></div>
      <div className="flex md:hidden min-h-[100px] w-screen dark:bg-gray-900"></div>
    </div>
  );
};

export default PokemonDetail;

