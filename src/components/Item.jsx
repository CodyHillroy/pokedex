import React from "react";
import { connect } from 'react-redux';
import { showDetails } from '../actions/detailsActions';

const Item = ({ pokemon, showDetails }) => {
  const { name, types, sprite, id } = pokemon;
  return (
    <div className="item" onClick={() => showDetails(pokemon)}>
      <img src={sprite} alt={name} />
      <p className="name">{name}</p>
      <div className="types">
        {types.map(type => (
          <span key={type}>{type}</span>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showDetails: (pokemon) => dispatch(showDetails(pokemon)),
})

export default connect(null, mapDispatchToProps)(Item);
