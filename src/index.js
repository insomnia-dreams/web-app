import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

//import { fetchCatalog } from './duck/actions'
import rootReducer from './duck/reducers'

import App from './App'

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger)
)

//store.dispatch(fetchCatalog())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

