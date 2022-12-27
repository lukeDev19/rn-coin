import {createSlice} from '@reduxjs/toolkit';

const coins = createSlice({
  name: 'coins',
  initialState: {
    data: [],
    offset: 0,
    isFetching: false,
    isMoreFetching: false,
    errorText: null,
    stats: {},
    updatedPrices: {},
  },
  reducers: {
    updateValue: (state, {payload}) => {
      state[payload.key] = payload.value;
    },
    getCoins: state => {
      state.isFetching = true;
      state.errorText = null;
    },
    getCoinsSuccess: (state, {payload}) => {
      state.isFetching = false;
      state.data = [...payload];
      state.offset = payload?.length || 0;
    },
    getCoinsFailure: (state, {payload}) => {
      state.isFetching = false;
      state.errorText = payload.errorText || 'Failed to Get Coins. Please try again later!';
    },
    getMoreCoins: state => {
      state.isMoreFetching = true;
      state.errorText = null;
    },
    getMoreCoinsSuccess: (state, {payload}) => {
      state.isMoreFetching = false;
      state.data = [...state.data, ...payload];
      state.offset = state.offset + payload?.length || 0;
    },
    getMoreCoinsFailure: (state, {payload}) => {
      state.isMoreFetching = false;
      state.errorText = payload.errorText || 'Failed to Get Coins. Please try again later!';
    },
  },
});

export default coins;
