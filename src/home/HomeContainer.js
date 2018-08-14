import { connect } from 'react-redux'

import HomeComponent from "./HomeComponent";
import { fetchCatalog } from "../duck/actions"

const mapStateToProps = state => {
  const { catalog } = state.global
  const { isFetching, categories, lastUpdated } = catalog || { isFetching: true, catalog: [] }
  
  return {
    isFetching,
    categories,
    lastUpdated
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCatalog: () => dispatch(fetchCatalog())
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default HomeContainer