import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LunchTimeApp from './LunchTimeApp';
import configureStore from '../store/configureStore';

const store = configureStore();

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <LunchTimeApp />}
      </Provider>
    );
  }
}
