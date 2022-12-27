import {createSlice} from '@reduxjs/toolkit';

const markets = createSlice({
  name: 'markets',
  initialState: {
    data: [],
    offset: 0,
    isFetching: false,
    isMoreFetching: false,
    errorText: null,
    stats: {},
  },
  reducers: {
    getMarkets: state => {
      state.isFetching = true;
      state.errorText = null;
    },
    getMarketsSuccess: (state, {payload}) => {
      state.isFetching = false;
      state.data = [...payload.data];
      state.stats = {...payload.stats};
      state.offset = payload.markets?.length || 0;
    },
    getMarketsFailure: (state, {payload}) => {
      state.isFetching = false;
      state.errorText = payload.errorText || 'Failed to Get Coins. Please try again later!';
    },
  },
});

export default markets;
