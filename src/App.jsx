import React, { useState, useEffect } from "react";
import "./App.css";

import ItemsList from "./components/ItemsList";
import Details from './components/Details';
import axios from "axios";

// http://pokeapi.co/api/v2/pokemon/?limit=12

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState('http://pokeapi.co/api/v2/pokemon/?limit=12');

  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: { results, next } } = await axios(nextUrl);
    setPokemonList([...pokemonList, ...results]);
    setNextUrl(next);
  }

  return (
    <div className="app">
      <nav>Pokedex</nav>
      {pokemonList.length ? <ItemsList pokemonList={pokemonList} fetchData={fetchData} /> : <p>Loading</p>}
      <Details />
    </div>
  );
};

export default App;
