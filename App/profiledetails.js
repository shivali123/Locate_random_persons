import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/profiledetail'

export default class Profiledetail extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}
