import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

// Carga diferida del componente Pokeball
const Pokeball = lazy(() => import("../components/common/Pokeball"));

const Landing = () => {
  return (
    <div className="bg-primary w-screen h-screen flex-col-center relative">
      <img
        src="/pokemon-logo.svg"
        alt="pokemon logo"
        className="absolute top-[80px] w-[300px] md:w-[400px]"
      />
      <div className="absolute bottom-0 w-full h-1/2 bg-white"></div>
      {/* Suspense para manejar el lazy loading */}
      <Suspense fallback={<img src="/pokeball-icon.svg" alt="pokemonball image" className="w-[500px] h-[500px]"/>}>
        <div className="scale-[90%] lg:scale-100">
          <Pokeball />
        </div>
      </Suspense>

      <div className="absolute bottom-[120px] z-10 text-[30px] font-semibold flex flex-col gap-6 items-center justify-center px-10">
        <h1 className="text-primary text-center text-[20px] md:text-[36px]">
          Do You Want to become a Pokemon expert?
        </h1>
        <Link to="/home">
          <button className="bg-primary text-2xl text-white p-2 px-6 rounded-lg hover:scale-125 transition-all duration-300 ease-in-out">
            Yes, For Sure!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
