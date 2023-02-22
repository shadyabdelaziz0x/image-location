/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppNavigator} from '@image-loc/navigation/app';
import {Provider} from 'react-redux';
import {store} from '@image-loc/state/storeConfig/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
