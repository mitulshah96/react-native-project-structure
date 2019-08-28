/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import axios from 'axios';
import {Provider} from 'react-redux';
import {configureStore} from './shared/store';
import {Apps} from './containers';

const store = configureStore(axios, {});

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Apps />
      </Provider>
    </>
  );
};

export default App;
