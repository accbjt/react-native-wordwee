/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.disableYellowBox = true;
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './store/reducers';
import AppContainer from './src/containers/AppContainer';
import {
  AppRegistry,
} from 'react-native';

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunkMiddleware)),
);

export default class wordwee extends Component {
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('wordwee', () => wordwee);
