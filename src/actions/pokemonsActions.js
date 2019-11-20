import axios from "axios";
import capitalize from "lodash/capitalize";

import {
  fetchingDataRequest,
  fetchingDataSuccess,
  fetchingDataFailure
} from "./fetchActions";

export const setPokemons = payload => ({
  type: "POKEMONS_SET",
  payload
});

export const setNextUrl = payload => ({
  type: "NEXT_URL_SET",
  payload
});

export const fetchPokemons = nextUrl => async dispatch => {

  try {
    dispatch(fetchingDataRequest());
    const {
      data: { results: pokemons, next }
    } = await axios(nextUrl);
    const promises = pokemons.map(p => axios(p.url));
  const results = await Promise.all(promises);
  const extracted = results.map(r => {
    const { id, name, weight, stats, types, moves, sprites } = r.data;

    const extractedStats = stats.map(stat => {
      const {
        base_stat: value,
        stat: { name }
      } = stat;
      return { name, value };
    });

    extractedStats.push(
      { name: "moves", value: moves.length },
      { name: "weight", value: weight }
    );

    const extractedTypes = types.map(type => {
      const {
        type: { name }
      } = type;
      return capitalize(name);
    });

    const sprite = sprites["front_default"];

    return {
      id,
      name: capitalize(name),
      sprite,
      stats: extractedStats,
      types: extractedTypes
    };
  });

  dispatch(setPokemons(extracted));
  dispatch(setNextUrl(next));
  dispatch(fetchingDataSuccess());

  } catch (error) {
    dispatch(fetchingDataFailure(error.message));
  }
};
