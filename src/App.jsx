/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';
import Offers from './containers/offers';
import styles from './App.scss';

const App = () => (
  <Provider store={store}>
    <Offers />
  </Provider>
);

export default hot(module)(App);
