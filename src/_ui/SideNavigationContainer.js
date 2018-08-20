import React, { Component } from 'react'
import { connect } from 'react-redux'

import { openSideNavigation, closeSideNavigation } from '../_duck/actions'
import SideNavigationComponent from './SideNavigationComponent'

class SideNavigationContainer extends Component {

  render() {
    const { catalog, sideNavigation } = this.props
    const { openSideNavigation, closeSideNavigation } = this.props

    const fullCatalog = catalog
    const shortCatalog = catalog.filter(category => category.path.length === 1)

    return <SideNavigationComponent
      fullCatalog={fullCatalog}
      shortCatalog={shortCatalog}
      sideNavigation={sideNavigation}
      openSideNavigation={openSideNavigation}
      closeSideNavigation={closeSideNavigation}
    />
  }
}

const mapStateToProps = state => {
  const { isFetching, catalog, lastUpdated } = state.global.catalog
  const { sideNavigation } = state.global.userInterface
  return {
    isFetching,
    catalog,
    lastUpdated,
    sideNavigation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSideNavigation: (categoryId) => {
      dispatch(openSideNavigation(categoryId))
    },
    closeSideNavigation: () => {
      dispatch(closeSideNavigation())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNavigationContainer)
