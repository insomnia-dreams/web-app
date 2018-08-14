import axios from 'axios'

export const REQUEST_CATALOG = 'REQUEST_CATALOG'

const requestCatalog = () => ({
  type: REQUEST_CATALOG
})

export const RECEIVE_CATALOG = 'RECEIVE_CATALOG'

const receiveCatalog = json => ({
  type: RECEIVE_CATALOG,
  categories: json.data,
  receivedAt: Date.now()
})

/* dont use catch in promise because that will also catch any errors in the dispatch and resulting render */
// https://github.com/facebook/react/issues/6895
export const fetchCatalog = () => dispatch => {
  dispatch(requestCatalog())
  return axios.get('/catalog')
    .then(response => {
      dispatch(receiveCatalog(response))
    })
}
