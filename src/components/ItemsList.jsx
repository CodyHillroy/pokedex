import React, { useEffect } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { resetAllFilters } from "../actions/filterActions";
import { fetchPokemons } from "../actions/pokemonsActions";
import filterSelector from "../selectors/filterSelector";

const ItemsList = ({
  fetchingDataState,
  pokemons,
  nextUrl,
  filterOptions,
  fetchPokemons,
  resetAllFilters
}) => {
  useEffect(() => {
    fetchPokemons(nextUrl);
  }, []);

  return (
    <React.Fragment>
      <div className="content">
        {pokemons.map(pokemon => (
          <Item pokemon={pokemon} key={pokemon.name} />
        ))}
        {filterOptions.length ? (
          <button className="reset_btn" onClick={() => resetAllFilters()}>
            Reset filter
          </button>
        ) : (
          <button className="load_btn" onClick={() => fetchPokemons(nextUrl)}>
            Load more
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  fetchingDataState: state.fetchingDataState,
  filterOptions: state.filterOptions,
  pokemons: filterSelector(state),
  nextUrl: state.nextUrl,
});

const mapDispatchToProps = dispatch => ({
  resetAllFilters: () => dispatch(resetAllFilters()),
  fetchPokemons: (nextUrl) => dispatch(fetchPokemons(nextUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
