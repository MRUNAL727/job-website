export const setFilter = (filters) => ({
  type: 'SET_FILTERS',
  payload: filters,
});

export const clearFilter = () => ({
  type: 'SET_FILTERS',
});
