import React, { useEffect } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { resetAllFilters } from "../actions/filterActions";
import { fetchPokemons } from "../actions/pokemonsActions";
import filterSelector from "../selectors/filterSelector";
import LoadResetButton from "./LoadResetButton";

const ItemsList = ({
  pokemons,
  filterOptions,
  fetchPokemons,
  resetAllFilters
}) => {
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <React.Fragment>
      <div className="poke-list">
        {pokemons.map(pokemon => (
          <Item pokemon={pokemon} key={pokemon.name} />
        ))}
        {filterOptions.length ? (
          <LoadResetButton type="reset" onClickAction={resetAllFilters} />
        ) : (
          <LoadResetButton type="load" onClickAction={fetchPokemons} />
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  filterOptions: state.filterOptions,
  pokemons: filterSelector(state)
});

const mapDispatchToProps = dispatch => ({
  resetAllFilters: () => dispatch(resetAllFilters()),
  fetchPokemons: () => dispatch(fetchPokemons())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
