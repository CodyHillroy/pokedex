import React from "react";
import Item from "./Item";

const ItemsList = ({ pokemons, nextUrl, addPokemons }) => {
  return (
    <React.Fragment>
      <div className="content">
        {pokemons.map(pokemon => (
          <Item pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
      <button className="load_btn" onClick={() => addPokemons(nextUrl)}>
        Load more
      </button>
    </React.Fragment>
  );
};

export default ItemsList;
