import axios from 'axios';
import capitalize from 'lodash/capitalize';

export const addPokemons = (nextUrl) => async (dispatch) => {
  const { data: { results: pokemons, next } } = await axios(nextUrl);
  const promises = pokemons.map(p => axios(p.url));
  const results = await Promise.all(promises);
  const extracted = results.map(r => {
    const { id, name, weight, stats, types, moves, sprites } = r.data;

    const extractedStats = stats.map(stat => {
      const { base_stat: value, stat: { name } } = stat;
      return { [name]: value };
    })

    extractedStats.push({ moves: moves.length }, { weight })

    const extractedTypes = types.map(type => {
      const { type: { name } } = type;
      return capitalize(name);
    })

    const sprite = sprites['front_default'];

    return {id, name: capitalize(name), sprite, stats: extractedStats, types: extractedTypes};
  });
  
  dispatch({
    type: 'POKEMONS_ADD',
    payload: extracted,
  });

  dispatch({
    type: 'NEXT_URL_SET',
    payload: next,
  });

};