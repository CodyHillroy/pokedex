import React from "react";
import { connect } from "react-redux";

import "./App.css";
import ItemsList from "./components/ItemsList";
import Details from "./components/Details";

const App = ({ detailsVisibility }) => {
  return (
    <div className="app">
      <nav className="nav-panel">POKEDEX</nav>
      <ItemsList />
      {detailsVisibility && <Details />}
    </div>
  );
};

const mapStateToProps = state => ({
  detailsVisibility: state.details.isVisible,
});

export default connect(mapStateToProps)(App);
