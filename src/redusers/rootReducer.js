import { combineReducers } from 'redux';

const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case 'POKEMONS_SET':
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
    case 'FILTER_SET':
      return null;
    default:
      return state;
  }
}

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case 'FILTER_SET':
      return state === 'All' ? [action.payload] : [...state, action.payload];
    case 'FILTER_RESET':
      return 'All';
    case 'POKEMONS_ADD':
      return 'All';
    default:
      return state;
  }
}

export default combineReducers({
  pokemons: pokemonsReducer,
  nextUrl: nextUrlReducer,
  details: detailsReducer,
  filterOption: filterReducer,
});