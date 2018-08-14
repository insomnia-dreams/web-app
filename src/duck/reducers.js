import { combineReducers } from 'redux'
import { REQUEST_CATALOG, RECEIVE_CATALOG } from "./actions"

function catalog(state = { isFetching: false, categories: [] }, action) {
  switch (action.type) {
    case REQUEST_CATALOG:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_CATALOG:
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.categories,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const globalReducer = combineReducers({
  catalog
})

export default globalReducer