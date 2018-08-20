import React, { Component } from 'react'
import { connect } from 'react-redux'

import SideNavigationComponent from './SideNavigationComponent'

class SideNavigationContainer extends Component {

  render() {
    let { catalog, isFetching } = this.props

    if (catalog.length && !isFetching) {
      catalog = catalog.filter(category => category.path.length === 1)
    }

    return <SideNavigationComponent catalog={catalog} />
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
