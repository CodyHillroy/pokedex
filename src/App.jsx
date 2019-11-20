import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { addPokemons } from './actions/pokemonsActions';

import ItemsList from "./components/ItemsList";
import Details from './components/Details';

// http://pokeapi.co/api/v2/pokemon/?limit=12

const App = ({ pokemons, nextUrl, details, addPokemons }) => {
  useEffect(() => {
    addPokemons(nextUrl);
  }, []);
  
  return (
    <div className="app">
      <nav>POKEDEX</nav>
      {pokemons.length ? <ItemsList pokemons={pokemons} nextUrl={nextUrl} addPokemons={addPokemons}/> : <p>Loading</p>}
      <div>
        {details && <Details details={details} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  nextUrl: state.nextUrl,
  details: state.details,
});

const mapDispatchToProps = (dispatch) => ({
  addPokemons: (nextUrl) => dispatch(addPokemons(nextUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
