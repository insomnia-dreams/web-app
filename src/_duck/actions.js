import axios from 'axios'

export const REQUEST_CATALOG = 'REQUEST_CATALOG'

const requestCatalog = () => ({
  type: REQUEST_CATALOG
})

export const RECEIVE_CATALOG = 'RECEIVE_CATALOG'

const receiveCatalog = json => ({
  type: RECEIVE_CATALOG,
  catalog: json.data,
  receivedAt: Date.now()
})

export const fetchCatalog = () => dispatch => {
  dispatch(requestCatalog())
  return axios.get('/catalog')
    .then(response => {
      if (response.status === 200) {
        dispatch(receiveCatalog(response))
      } else {
        //dispatch(receiveCatalogFailure())
      }
    })
}

//{ type: 'FETCH_POSTS_REQUEST' }
//{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
//{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }

export const SET_AUTH_USER = 'SET_AUTH_USER'

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser
})

export const OPEN_SIDENAVIGATION = 'OPEN_SIDENAVIGATION'

export const openSideNavigation = (categoryId) => ({
  type: OPEN_SIDENAVIGATION,
  categoryId
})

export const CLOSE_SIDENAVIGATION = 'CLOSE_SIDENAVIGATION'

export const closeSideNavigation = () => ({
  type: CLOSE_SIDENAVIGATION
})