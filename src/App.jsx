import React from "react";
import { connect } from "react-redux";

import "./App.css";
import ItemsList from "./components/ItemsList";
import Details from "./components/Details";

const App = ({ detailsVisibility }) => {
  return (
    <div className="app">
      <nav>POKEDEX</nav>
      <ItemsList />
      <div className="details-wrapper">{detailsVisibility && <Details />}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  detailsVisibility: state.details.isVisible
});

export default connect(mapStateToProps)(App);
