import React, { useState, useEffect } from "react";
/* INSTRUCTION: Import the fetchPokemons and fetchTypes functions from the utils/api file */
import { fetchPokemons } from "./utils/api";
import { fetchTypes } from "./utils/api";

/* INSTRUCTION: Import the Filters, and PokemonGrid components */
import Filters from "./components/Filters";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  /* INSTRUCTION: Create a state for pokemons and types */

  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  /* 
        INSTRUCTION: 
        - Use the useEffect hook to fetch pokemons. 
    */
  useEffect(() => {
    fetchPokemons(search, type).then((data) => {
      setPokemons(data);
    });
  }, [search, type]);

  /* INSTRUCTION: Use the useEffect hook to fetch types */

  useEffect(() => {
    fetchTypes()
      .then((data) => {
        setTypes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /* INSTRUCTION: Create functions to handle search change */

  const handleSearchChange = (newSearch) => {
    /* INSTRUCTION: Update the seacrh state */
    setSearch(newSearch);
  };

  const handleTypeChange = (newType) => {
    /* INSTRUCTION: Update the type state */
    setType(newType);
  };

  return (
    <div className="app">
      <h1>Pokedex</h1>
      <Filters
        /* INSTRUCTION: 
                    - Pass the search and type states as props to the Filters component
                    - Pass the types data as props to the Filters component
                */
        search={search}
        type={type}
        types={types}
        onTypeChange={handleTypeChange}
        /* 
                    INSTRUCTION:
                    - Pass the handleSearchChange functions as props to the Filters component
                */
        onSearchChange={handleSearchChange}
      />
      <PokemonGrid
        /* 
                INSTRUCTION:
                    - Pass the pokemons states as props to the PokemonGrid component
                */
        pokemons={pokemons}
      />
    </div>
  );
}

export default App;
