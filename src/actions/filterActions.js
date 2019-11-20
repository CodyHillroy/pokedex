export const setFilter = (payload) => ({
  type: 'FILTER_SET',
  payload,
});

export const resetAllFilters = () => ({
  type: 'FILTER_RESET',
})