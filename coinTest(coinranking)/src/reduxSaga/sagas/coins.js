import {put, call, takeEvery, take} from 'redux-saga/effects';
import {getCoins} from '../apis/coins';
import {coins} from '../stores';

function* getCoinsSaga({payload}) {
  try {
    const result = yield call(getCoins, payload);
    if (result.status === 'success') {
      yield put(coins.actions.getCoinsSuccess(result.data));
    }
  } catch (error) {
    console.info('error', error);
    const status = error?.response?.status || error?.request?.status;
    let errorText = 'Something went wrong while calling coin API, please try again later.';
    if (status >= 400 && status <= 500) {
      errorText = 'You put wrong queries. Please try again with other queries';
    }
    yield put(coins.actions.getCoinsFailure({errorText}));
  }
}

function* getMoreCoinsSaga({payload}) {
  try {
    const result = yield call(getCoins, payload);
    if (result.status === 'success') {
      yield put(coins.actions.getMoreCoinsSuccess(result.data));
    }
    console.info('result', result);
  } catch (error) {
    console.info('error', error);
    const status = error?.response?.status || error?.request?.status;
    let errorText = 'Something went wrong while calling coin API, please try again later.';
    if (status >= 400 && status <= 500) {
      errorText = 'You put wrong queries. Please try again with other queries';
    }
    yield put(coins.actions.getMoreCoinsFailure({errorText}));
  }
}
export default function* coinSaga() {
  yield takeEvery(coins.actions.getCoins, getCoinsSaga);
  yield takeEvery(coins.actions.getMoreCoins, getMoreCoinsSaga);
}
