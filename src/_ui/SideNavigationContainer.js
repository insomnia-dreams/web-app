import React, { Component } from 'react'
import { connect } from 'react-redux'

import SideNavigationComponent from './SideNavigationComponent'

class SideNavigationContainer extends Component {

  render() {
    const { catalog } = this.props

    const fullCatalog = catalog
    const shortCatalog = catalog.filter(category => category.path.length === 1)

    return <SideNavigationComponent fullCatalog={fullCatalog} shortCatalog={shortCatalog} />
  }
}

const mapStateToProps = state => {
  const { isFetching, catalog, lastUpdated } = state.global.catalog
  return {
    isFetching,
    catalog,
    lastUpdated
  }
}

export default connect(mapStateToProps)(SideNavigationContainer)
