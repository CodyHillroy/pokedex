import React, { useState, useEffect } from "react";
import "./App.css";

import ItemsList from "./components/ItemsList";
import Details from './components/Details';
import axios from "axios";

// http://pokeapi.co/api/v2/pokemon/?limit=12

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState('http://pokeapi.co/api/v2/pokemon/?limit=12');
  const [activeStats, setActiveStats] = useState(null);

  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: { results, next } } = await axios(nextUrl);
    setPokemonList([...pokemonList, ...results]);
    setNextUrl(next);
  }

  const showStats = (...args) => {
    setActiveStats(args);
  }

  return (
    <div className="app">
      <nav>POKEDEX</nav>
      {pokemonList.length ? <ItemsList pokemonList={pokemonList} fetchData={fetchData} showStats={showStats} /> : <p>Loading</p>}
      <div>
        {activeStats && <Details activeStats={activeStats} />}
      </div>
      
    </div>
  );
};

export default App;
