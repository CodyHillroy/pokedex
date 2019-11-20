import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { fetchPokemons } from './actions/pokemonsActions';
import filterSelector from './selectors/filterSelector';

import ItemsList from "./components/ItemsList";
import Details from './components/Details';

// http://pokeapi.co/api/v2/pokemon/?limit=12

const App = ({ pokemons, nextUrl, details, filterOption, fetchPokemons }) => {
  useEffect(() => {
    fetchPokemons(nextUrl);
  }, []);

  const filteredPokemons = filterSelector(pokemons, filterOption);
  
  return (
    <div className="app">
      <nav>POKEDEX</nav>
      {filteredPokemons.length ? <ItemsList pokemons={filteredPokemons} nextUrl={nextUrl} fetchPokemons={fetchPokemons}/> : <p>Loading</p>}
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
  fetchPokemons: (nextUrl) => dispatch(fetchPokemons(nextUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
