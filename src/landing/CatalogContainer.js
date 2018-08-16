import { connect } from 'react-redux'

import CatalogComponent from "./CatalogComponent"
import { fetchCatalog } from "../_duck/actions"

const mapStateToProps = state => {
  const { isFetching, catalog, lastUpdated } = state.global.catalog || { isFetching: true, catalog: [] }
    return {
    isFetching,
    catalog,
    lastUpdated
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCatalog: () => dispatch(fetchCatalog())
})

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(CatalogComponent)

export default CatalogContainer