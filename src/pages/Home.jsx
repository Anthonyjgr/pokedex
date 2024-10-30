import React, { useState } from "react";
import PokemonSmallCard from "../components/pokemon/PokemonSmallCard";
import SerchBar from "../components/pokemon/PokemonSearch";
import PokemonFilters from "../components/pokemon/PokemonFilters";
import { useSelector } from "react-redux";
import Pagination from "../components/pokemon/Pagination";
import SmallPokeball from "../components/common/SmallPokeball";
import { Link } from "react-router-dom";

const Home = ({ pokemons }) => {
  const loading = useSelector((state)=> state.pokemon.loading)
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const [openMenu, setOpenMenu] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Total de páginas basadas en el número total de Pokémon
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

  // Calcular el rango de Pokémon a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPokemons = pokemons.slice(startIndex, startIndex + itemsPerPage);

  // Cambia la página al hacer clic en "Anterior" o "Siguiente"
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

// console.log(loading)
  if (loading) {
    return (
      <div
        role="status"
        className="w-screen h-screen flex items-center justify-center"
      >
        <span className="text-2xl">Loading...</span>
      </div>
    );
  }

  return (
    <div
      className={`flex-col-center w-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } `}
    >
      {/* SEARCHBAR SECTION */}
      <div className="flex flex-col w-full items-center justify-center mt-6">
        <div className="flex flex-row items-center justify-center px-4 w-full relative gap-2">
          <div className="w-full">
            <SerchBar />
          </div>
          <button
            onClick={handleOpen}
            className="w-10 flex lg:hidden items-center justify-center bg-primary rounded-lg h-[40px] "
          >
            <img src="/open-icon.svg" alt="open menu icon" className="w-6" />
          </button>
          {openMenu ? (
            <div className="flex lg:hidden absolute top-0 w-full z-30">
              <PokemonFilters handleOpen={handleOpen} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* POKEMONS AND FILTER SECTION */}
      <div className="flex flex-row items-start justify-center lg:justify-between px-4 py-10 w-full max-w-[1440px] gap-4 ">
        <div className="hidden lg:flex w-full md:w-[18%]">
          <PokemonFilters />
        </div>
        <div className="flex-col-center md:w-[82%]">
          {currentPokemons.length > 0 ? (
            <div className="w-full  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
              {currentPokemons?.map((poke) => (
                <PokemonSmallCard
                  image={poke?.sprites}
                  id={poke?.id}
                  types={poke?.types}
                  name={poke?.name}
                  principalType={poke?.types[0].type.name}
                />
              ))}
            </div>
          ) : (
            <div className="flex-col-center w-[82%] py-20">
              <span className="text-center w-full h-full text-primary text-2xl">
                Pokemon not found, you can try with another filter.{" "}
              </span>
            </div>
          )}
          {/* PAGINATION SECTION */}
        </div>
      </div>
      <div className="w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="w-full h-[5px] bg-black"></div>
    </div>
  );
};

export default Home;
