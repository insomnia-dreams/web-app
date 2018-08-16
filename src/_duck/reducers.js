import { combineReducers } from 'redux'
import { REQUEST_CATALOG, RECEIVE_CATALOG, SET_AUTH_USER } from "./actions"

function catalog(state = { isFetching: false, catalog: [] }, action) {
  switch (action.type) {
    case REQUEST_CATALOG:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_CATALOG:
      return Object.assign({}, state, {
        isFetching: false,
        catalog: action.catalog,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function session(state = {authUser: null}, action) {
  switch(action.type) {
    case SET_AUTH_USER : {
      return Object.assign({}, state, {
        authUser: action.authUser
      })
    }
    default: 
      return state;
  }
}

const globalReducer = combineReducers({
  catalog,
  session
})

export default globalReducer