import {put, call, takeEvery, take} from 'redux-saga/effects';
import {getMarkets} from '../apis/markets';
import {markets} from '../stores';

function* getMarketsSaga({payload}) {
  try {
    const result = yield call(getMarkets, payload);
    console.info('result', result);
    yield put(markets.actions.getMarketsSuccess(result.data));
  } catch (error) {
    console.info('error~~~', error);
    const status = error?.response?.status || error?.request?.status;
    let errorText = 'Something went wrong while calling coin API, please try again later.';
    if (status >= 400 && status <= 500) {
      errorText = 'You put wrong queries. Please try again with other queries';
    }
    yield put(markets.actions.getMarketsFailure({errorText}));
  }
}

function* getMoreMarketsSaga({payload}) {
  try {
    const result = yield call(getMarkets, payload);
    console.info('result', result);
    yield put(markets.actions.getMoreMarketsSuccess(result.data));
  } catch (error) {
    console.info('error~~~', error);
    const status = error?.response?.status || error?.request?.status;
    let errorText = 'Something went wrong while calling coin API, please try again later.';
    if (status >= 400 && status <= 500) {
      errorText = 'You put wrong queries. Please try again with other queries';
    }
    yield put(markets.actions.getMoreMarketsFailure({errorText}));
  }
}
export default function* marketsSaga() {
  yield takeEvery(markets.actions.getMarkets, getMarketsSaga);
  yield takeEvery(markets.actions.getMoreMarkets, getMoreMarketsSaga);
}
