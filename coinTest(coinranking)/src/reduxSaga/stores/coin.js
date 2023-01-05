import {createSlice} from '@reduxjs/toolkit';

const coin = createSlice({
  name: 'coin',
  initialState: {
    data: [],
    isFetching: false,
    errorText: null,
  },
  reducers: {
    updateValue: (state, {payload}) => {
      state[payload.key] = payload.value;
    },
    getCoinPriceHistory: state => {
      state.isFetching = true;
      state.errorText = null;
    },
    getCoinPriceHistorySuccess: (state, {payload}) => {
      state.isFetching = false;
      state.data = payload.history;
    },
    getCoinPriceHistoryFailure: (state, {payload}) => {
      state.isFetching = false;
      state.errorText = payload.errorText || 'Failed to get price hisotry. Please try again later!';
    },
  },
});

export default coin;
