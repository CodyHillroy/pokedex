import React from "react";
import { connect } from "react-redux";
import { showDetails } from "../actions/detailsActions";
import Type from "./Type";

const Item = ({ pokemon, showDetails }) => {
  const { name, types, sprite } = pokemon;
  return (
    <div className="flex-column shadow poke-item">
      <img src={sprite} alt={name} onClick={() => showDetails(pokemon)}/>
      <p className="poke-name">{name}</p>
      <div className="poke-types">
        {types.map(type => (
          <Type key={type}>{type}</Type>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  showDetails: pokemon => dispatch(showDetails(pokemon))
});

export default connect(null, mapDispatchToProps)(Item);
