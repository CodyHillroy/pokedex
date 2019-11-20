import { combineReducers } from 'redux';

const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case 'POKEMONS_ADD':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const nextUrlReducer = (state = 'http://pokeapi.co/api/v2/pokemon/?limit=12', action) => {
  switch (action.type) {
    case 'NEXT_URL_SET':
      return action.payload;
    default:
      return state;
  }
};

const detailsReducer = (state = null, action) => {
  switch (action.type) {
    case 'DETAILS_SHOW':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  pokemons: pokemonsReducer,
  nextUrl: nextUrlReducer,
  details: detailsReducer,
});