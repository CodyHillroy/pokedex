import React from 'react';
import Item from './Item';

const ItemsList = ({ pokemonList, fetchData, showStats }) => {
  return (
    <React.Fragment>
      <div className="content">
        {pokemonList.map(pokemon => <Item pokemon={pokemon} key={pokemon.name} showStats={showStats} />)}
      </div>
      <button className="load_btn" onClick={() => fetchData()} >Load more</button>
    </React.Fragment>
  );
}
 
export default ItemsList;