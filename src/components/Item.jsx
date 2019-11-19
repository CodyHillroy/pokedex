import React from "react";
import axios from 'axios';

const Item = ({ pokemon: { name, url } }) => {
  const path = url.split('/');
    const id = path[path.length - 2];
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="item">
      <img src={spriteUrl} alt={name} />
      <p className="name">{ name }</p>
      <div className="types">
        <span className="fire">Fire</span>
        <span className="poison">Poison</span>
        <span className="electric">Electric</span>
      </div>
    </div>
  );
};

export default Item;
