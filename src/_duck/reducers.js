import { combineReducers } from 'redux'
import { REQUEST_CATALOG, RECEIVE_CATALOG, SET_AUTH_USER, OPEN_SIDENAVIGATION, CLOSE_SIDENAVIGATION } from "./actions"

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

function session(state = { authUser: null }, action) {
  switch (action.type) {
    case SET_AUTH_USER: {
      return Object.assign({}, state, {
        authUser: action.authUser
      })
    }
    default:
      return state;
  }
}

function userInterface(state = { sideNavigation: { isOpen: false, categoryId: '' } }, action) {
  switch (action.type) {
    case OPEN_SIDENAVIGATION: {
      return Object.assign({}, state, {
        sideNavigation: {
          isOpen: true,
          categoryId: action.categoryId
        }
      })
    }
    case CLOSE_SIDENAVIGATION: {
      return Object.assign({}, state, {
        sideNavigation: {
          isOpen: false,
          categoryId: ''
        }
      })
    }
    default:
      return state;
  }
}

const globalReducer = combineReducers({
  catalog,
  session,
  userInterface
})

export default globalReducer