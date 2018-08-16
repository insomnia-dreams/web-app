import { connect } from 'react-redux'

import LandingComponent from "./LandingComponent"
import { fetchCatalog } from "../_duck/actions"

const mapStateToProps = state => {
  const { isFetching, categories, lastUpdated } = state.global.catalog || { isFetching: true, catalog: [] }
  
  return {
    isFetching,
    categories,
    lastUpdated
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCatalog: () => dispatch(fetchCatalog())
})

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(LandingComponent)

export default LandingContainer