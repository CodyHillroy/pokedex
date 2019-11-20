import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { addPokemons } from './actions/pokemonsActions';
import filterSelector from './selectors/filterSelector';

import ItemsList from "./components/ItemsList";
import Details from './components/Details';
import FilterPanel from "./components/FilterPanel";

// http://pokeapi.co/api/v2/pokemon/?limit=12

const App = ({ pokemons, nextUrl, details, filterOption, addPokemons }) => {
  useEffect(() => {
    addPokemons(nextUrl);
  }, []);

  const filteredPokemons = filterSelector(pokemons, filterOption);
  
  return (
    <div className="app">
      <nav>POKEDEX</nav>
      <FilterPanel />
      {filteredPokemons.length ? <ItemsList pokemons={filteredPokemons} nextUrl={nextUrl} addPokemons={addPokemons}/> : <p>Loading</p>}
      <div className="details-wrapper">
        {details && <Details details={details} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  nextUrl: state.nextUrl,
  details: state.details,
  filterOption: state.filterOption,
});

const mapDispatchToProps = (dispatch) => ({
  addPokemons: (nextUrl) => dispatch(addPokemons(nextUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
