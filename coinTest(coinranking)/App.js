import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/routes';
import {customConfigureStore} from './src/reduxSaga';
const {Provider, store} = customConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
}
