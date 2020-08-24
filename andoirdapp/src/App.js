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
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import {StyleProvider} from 'native-base';
import Router from './components/Router';

const App = () => (
  <StyleProvider style={getTheme(material)}>
    <Provider store={store}>
      <Router />
    </Provider>
  </StyleProvider>
);

export default App;
