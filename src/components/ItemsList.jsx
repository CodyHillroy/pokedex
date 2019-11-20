import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { resetAllFilters } from "../actions/filterActions";

const ItemsList = ({
  pokemons,
  nextUrl,
  filterOption,
  fetchPokemons,
  resetAllFilters
}) => {
  return (
    <React.Fragment>
      <div className="content">
        {pokemons.map(pokemon => (
          <Item pokemon={pokemon} key={pokemon.name} />
        ))}
        {filterOption === "All" ? (
          <button className="load_btn" onClick={() => fetchPokemons(nextUrl)}>
            Load more
          </button>
        ) : (
          <button className="reset_btn" onClick={() => resetAllFilters()}>
            Reset filter
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  filterOption: state.filterOption
});

const mapDispatchToProps = dispatch => ({
  resetAllFilters: () => dispatch(resetAllFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
