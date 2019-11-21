import axios from "axios";
import extractDataFrom from "../extractDataFrom";

import {
  fetchingDataRequest,
  fetchingDataSuccess,
  fetchingDataFailure
} from "./fetchActions";

export const setPokemons = pokemons => ({
  type: "POKEMONS_SET",
  pokemons
});

export const fetchPokemons = () => async (dispatch, getState) => {
  try {
    dispatch(fetchingDataRequest());
    const { nextUrl } = getState();
    const {
      data: { results: pokemons, next }
    } = await axios(nextUrl);
    const promises = pokemons.map(p => axios(p.url));
    const results = await Promise.all(promises);
    const extracted = extractDataFrom(results);

    dispatch(setPokemons(extracted));
    dispatch(setNextUrl(next));
    dispatch(fetchingDataSuccess());
  } catch (error) {
    dispatch(fetchingDataFailure());
  }
};

export const setNextUrl = nextUrl => ({
  type: "NEXT_URL_SET",
  nextUrl
});
