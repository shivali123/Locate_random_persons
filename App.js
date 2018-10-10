import React, {Component} from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Route} from './App/config/route'
import rootReducer from './App/reducers'
const store = createStore(rootReducer)

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
