import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";

import App from './App'
import configureStore from "./configureStore"

const store = configureStore()

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}