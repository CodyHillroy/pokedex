import { combineReducers } from "redux";

const pokemonsReducer = (state = [], { type, pokemons }) => {
  switch (type) {
    case "POKEMONS_SET":
      return [...state, ...pokemons];
    default:
      return state;
  }
};

const nextUrlReducer = (
  state = "https://pokeapi.co/api/v2/pokemon/?limit=12",
  { type, nextUrl }
) => {
  switch (type) {
    case "NEXT_URL_SET":
      return nextUrl;
    default:
      return state;
  }
};

const detailsReducer = (
  state = { isVisible: false, data: null },
  { type, data }
) => {
  switch (type) {
    case "DETAILS_SHOW":
      return { isVisible: true, data };
    case "FILTER_SET":
      return { isVisible: false, data: null };
    default:
      return state;
  }
};

const filterReducer = (state = [], { type, filterOption }) => {
  switch (type) {
    case "FILTER_SET":
      return state.includes(filterOption) ? state : [...state, filterOption];
    case "FILTER_RESET":
      return [];
    case "POKEMONS_ADD":
      return [];
    default:
      return state;
  }
};

const fetchingReducer = (state = "request", { type }) => {
  switch (type) {
    case "FETCH_DATA_REQUEST":
      return "request";
    case "FETCH_DATA_SUCCESS":
      return "success";
    case "FETCH_DATA_FAILURE":
      return "failure";
    default:
      return state;
  }
};

export default combineReducers({
  fetchingDataState: fetchingReducer,
  pokemons: pokemonsReducer,
  nextUrl: nextUrlReducer,
  details: detailsReducer,
  filterOptions: filterReducer
});
