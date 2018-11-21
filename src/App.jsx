import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';
import Offers from './containers/offers';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Offers />
      </Provider>
    );
  }
}

export default hot(module)(App);
