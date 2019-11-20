export default (state, types) => {
  return types === 'All' ? state : state.filter(item => {
    return types.every(type => item.types.includes(type));
  })
};