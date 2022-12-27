import {combineReducers} from 'redux';

import coins from './coins';
import markets from './market';

const rootReducer = combineReducers({
  coins: coins.reducer,
  markets: markets.reducer,
});

export {rootReducer, coins, markets};
