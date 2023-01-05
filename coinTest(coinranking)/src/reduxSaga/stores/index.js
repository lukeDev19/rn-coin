import {combineReducers} from 'redux';

import coin from './coin';
import coins from './coins';
import markets from './market';

const rootReducer = combineReducers({
  coin: coin.reducer,
  coins: coins.reducer,
  markets: markets.reducer,
});

export {rootReducer, coins, markets, coin};
