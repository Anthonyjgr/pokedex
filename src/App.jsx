import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import NotFound from "./pages/NotFound";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { fetchPokemons } from "./redux2/actions/pokemonActions";
import { filter } from "./redux2/actions/filterActions";
import { pokemonFilterTypesList } from "./utils/helpers";
import Favorites from "./pages/Favorites";
import Landing from "./pages/Landing";

function App() {
  const dispatch = useDispatch();
  const { loading, error, FilteredPokemons } = useSelector((state) => state.pokemon);
  const location = useLocation()

  if (!localStorage.getItem("filters")) {
    localStorage.setItem(
      "filters",
      JSON.stringify({
        sort: "lower",
        input: "",
        types: pokemonFilterTypesList,
      })
    );
  }

  useEffect(() => {
    dispatch(fetchPokemons()).then(() => {
      dispatch(filter());
    });

  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-hidden items-center justify-start">
      {location.pathname !== "/" && <Header />}
      <main className="w-full ">
        {/* {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>} */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home pokemons={FilteredPokemons} />} />
          <Route path="/pokemon-details/:id" element={<PokemonDetail />} />
          <Route path="/fav" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
