import {put, call, takeEvery} from 'redux-saga/effects';

import {getCoinPriceHistory} from '../apis/coins';
import {coin} from '../stores';

function* getCoinPriceHistorySaga({payload}) {
  try {
    const result = yield call(getCoinPriceHistory, payload);
    console.info('result', result);
    if (result.status === 'success') {
      yield put(coin.actions.getCoinPriceHistorySuccess(result.data));
    } else {
      yield put(coin.actions.getCoinPriceHistoryFailure({errorText: 'Something went wrong! Please try again later.'}));
    }
  } catch (error) {
    console.info('error', error);
    const status = error?.response?.status || error?.request?.status;
    let errorText = 'Something went wrong while calling Price history API, please try again later.';
    if (status >= 400 && status <= 500) {
      errorText = 'You put wrong queries. Please try again with other queries';
    }
    yield put(coin.actions.getCoinPriceHistoryFailure({errorText}));
  }
}

export default function* coinSaga() {
  yield takeEvery(coin.actions.getCoinPriceHistory, getCoinPriceHistorySaga);
}
