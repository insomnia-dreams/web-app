import React, { Component } from 'react'
import { connect } from 'react-redux'

import { openSideNavigation, closeSideNavigation } from '../_duck/actions'
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

const mapDispatchToProps = dispatch => {
  openSideNavigation: (categoryId) => {
    dispatch(openSideNavigation(categoryId))
  }
  closeSideNavigation: () => {
    dispatch(closeSideNavigation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNavigationContainer)
