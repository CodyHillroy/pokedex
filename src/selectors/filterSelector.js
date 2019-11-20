export default ({ pokemons, filterOptions }) => {
  return filterOptions.length
    ? pokemons.filter(poke => {
        return filterOptions.every(opt => poke.types.includes(opt));
      })
    : pokemons;
};
