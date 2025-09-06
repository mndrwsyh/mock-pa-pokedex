import React from "react";

function PokemonGrid(props) {
  const { pokemons } = props;
  return (
    <div className="pokemon-grid">
      {/* 
                INSTRUCTION: 
                if pokemons data is available, display the pokemons in a 3-columns grid. 
                You may use the css class "pokemon-card" to style each pokemon card.
                if not, display a "No pokemons found." message 
            */}
      {!pokemons ? (
        <h1>No pokemons found.</h1>
      ) : (
        <>
          {pokemons.map((p) => (
            <>
              <div className="pokemon-card">
                <h3>{p.name}</h3>
                <p>{p.type}</p>
                <p>{p.level}</p>
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
}

export default PokemonGrid;
