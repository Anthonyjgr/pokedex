import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../redux2/actions/filterActions";

const SerchBar = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);

    // Si el input está vacío, despacha el filtro con un valor vacío
    if (value === "") {
      dispatch(filter("", "input"));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(filter(inputData, "input"));
  };

  const handleCleanInput = () =>{
    dispatch(filter("", "input"))
    setInputData("")
  }
  
  return (
    <section className="w-full flex items-center justify-center  h-[40px]">
      <form
        role="search" // Indica que este formulario es específicamente para búsquedas.
        onSubmit={handleSearch} // Define la acción que quieres al hacer submit.
        className="w-full max-w-[420px] flex items-center "
      >
        <label htmlFor="search-input" className="sr-only text-[10px] md:text-md">
          Search Pokémon by name or ID
        </label>
        <div className="w-full md:w-[400px] relative ">
          <input
            id="search-input"
            type="search" // Semánticamente correcto para búsquedas
            onChange={handleInputChange}
            value={inputData}
            placeholder="Search by Name or ID"
            className="rounded-lg text-md p-2 w-full shadow-md h-[40px] md:h-[50px] dark:bg-gray-700"
          />
          {/* CLEAN INPUT BUTTON */}
          <button className="absolute flex items-center justify-center right-1 top-1/2 trnasform -translate-y-1/2 cursor-pointer  w-[40px] h-[40px]">
            <img
              src="/close.svg"
              alt="close icon"
              className="h-[15px] hover:scale-125 transition-all duration-300 ease-in-out "
              onClick={handleCleanInput}
            />
          </button>
        </div>
        {/* SEARCH BUTTON */}
        <button
          type="submit"
          className="rounded-lg ml-2 bg-white dark:bg-gray-700 p-2 h-[40px] md:h-[50px] shadow-md flex items-center justify-center"
          aria-label="Search"
        >
          <img src="/search.svg" alt="search icon" className="w-[30px] h-[30px] dark:bg-gray-700"
          />
        </button>
      </form>
    </section>
  );
};

export default SerchBar;
