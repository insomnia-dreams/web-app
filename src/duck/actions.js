import axios from 'axios'

export const REQUEST_CATALOG = 'REQUEST_CATALOG'

function requestCatalog() {
  return {
    type: REQUEST_CATALOG
  }
}

export const RECEIVE_CATALOG = 'RECEIVE_CATALOG'

function receiveCatalog(json) {
  return {
    type: RECEIVE_CATALOG,
    categories: json.data,
    receivedAt: Date.now()
  }
}

export function fetchCatalog() {
  return dispatch => {
    dispatch(requestCatalog())
    axios.get('/catalog')
      .then(response => {
        dispatch(receiveCatalog(response))
      })
  }
}