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
import Router from './components/Router';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
