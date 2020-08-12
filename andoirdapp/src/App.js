/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Home from './components/Home';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
