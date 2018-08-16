import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { COLORS } from '../_constants/styles'

const NavWrapper = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  color: ${COLORS.SIDE_NAV_LINK};
`

class SideNavigationContainer extends Component {

  render() {
    const { catalog } = this.props
    return (
      <div>
        {catalog.length && catalog.map(category => (
          <NavWrapper key={category.id}>
            {category.title}
          </NavWrapper>
        ))}
      </div>
    )
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
