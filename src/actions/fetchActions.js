export const fetchingDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

export const fetchingDataSuccess = () => ({
  type: 'FETCH_DATA_SUCCESS',
});

export const fetchingDataFailure = (message) => ({
  type: 'FETCH_DATA_FAILURE',
});