export const setFilter = filterOption => ({
  type: "FILTER_SET",
  filterOption
});

export const resetAllFilters = () => ({
  type: "FILTER_RESET"
});
