import React from 'react';
import Item from './Item';

const ItemsList = ({ pokemonList, fetchData }) => {
  return (
    <React.Fragment>
      <div className="content">
        {pokemonList.map(pokemon => <Item pokemon={pokemon} key={pokemon.name} />)}
      </div>
      <button className="load_btn" onClick={() => fetchData()} >Load more</button>
    </React.Fragment>
  );
}
 
export default ItemsList;