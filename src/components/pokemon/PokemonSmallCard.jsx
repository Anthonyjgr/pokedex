import React from "react";
import { hoverClasses, whiteTextColors } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favPokemon } from "../../redux2/actions/pokemonActions";

const PokemonSmallCard = ({ image, id, types, name, principalType }) => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const favorites = useSelector((state) => state.pokemon.favorites); // Obtener favoritos
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFavorite = favorites.some((poke) => poke.id === id); // Verificar si está en favoritos

  const handleFav = (e) => {
    e.stopPropagation(); // Prevenir navegación al detalle del Pokémon
    dispatch(favPokemon(id)); // Alternar favorito
  };

  const handleNavigate = () => {
    navigate(`/pokemon-details/${id}`);
  };

  // Selecciona la clase en función de `principalType`
  const bgHoverColor = hoverClasses[principalType] || "hover:bg-gray-200"; // Clase por defecto si el tipo no coincide

  const loaderIcon = (
    <div
      role="status"
      className="w-[120px] h-[100px] hover:scale-125 transition-all duration-500 ease-in-out z-10"
    >
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  );

  return (
    <div
      className={`flex-col-center p-4 rounded-lg gap-2 max-h-[300px] ${
        isDarkMode ? "bg-gray-700" : "bg-white"
      } shadow-[rgba(0,_0,_0,_0.18)_0px_10px_25px_-13px]
       hover:cursor-pointer ${bgHoverColor} hover:scale-105 transition-all duration-200 ease-in-out`}
      key={id + name}
      onClick={handleNavigate}
    >
      <div className="flex items-center justify-center p-4 w-full h-full pt-10 rounded-lg dark:bg-gray-600 bg-gray-50 relative">
        {image.length < 0 ? (
          loaderIcon
        ) : (
          <img
            src={image}
            alt={`Image of pokemon ${name}`}
            className="w-[120px] h-[100px] hover:scale-125 transition-all duration-500 ease-in-out z-10"
          />
        )}

        <span className="text-sm absolute top-3 right-3 dark:text-gray-300 text-gray-500">
          {"#" + id}
        </span>
        <img
          src={isFavorite ? "/fav-red.svg" : "/fav-gray.svg"} // Cambia el icono según el estado
          alt={`Favorite icon for ${name}`}
          className="w-[20px] h-[20px] absolute top-3 left-3 dark:text-gray-300 text-gray-500"
          onClick={handleFav}
        />
      </div>
      <span className="font-semibold text-gray-500 dark:text-gray-300">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
      <div className="flex-row-center gap-2">
        {types?.map((t) => (
          <div
            className={`p-1 px-3 rounded-lg text-[14px] ${
              "bg-" + t?.type?.name + "-light"
            } ${whiteTextColors.includes(t?.type?.name) ? "text-white" : "text-black"}`}
            key={`${id}-${t?.type?.name}`}
          >
            {t?.type?.name.charAt(0).toUpperCase() + t?.type?.name.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonSmallCard;
