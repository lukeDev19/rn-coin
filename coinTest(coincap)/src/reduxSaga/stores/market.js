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
      state.data = [...payload];
      state.offset = payload?.length || 0;
    },
    getMarketsFailure: (state, {payload}) => {
      state.isFetching = false;
      state.errorText = payload.errorText || 'Failed to Get Coins. Please try again later!';
    },
    getMoreMarkets: state => {
      state.isMoreFetching = true;
      state.errorText = null;
    },
    getMoreMarketsSuccess: (state, {payload}) => {
      state.isMoreFetching = false;
      state.data = [...state.data, ...payload];
      state.offset = state.offset + payload?.length || 0;
    },
    getMoreMarketsFailure: (state, {payload}) => {
      state.isMoreFetching = false;
      state.errorText = payload.errorText || 'Failed to Get Coins. Please try again later!';
    },
  },
});

export default markets;
