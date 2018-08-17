import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { COLORS } from '../_constants/styles'

const Wrapper = styled.div`
  position: relative;
  border: 1px solid black;
`

const LinkWrapper = styled.div`
  padding-right: 25px;
  padding-bottom: 20px;
`

const StyledLink = styled(Link)`
  color: ${COLORS.SIDE_NAV_LINK};
  font-size: 14px;
  text-decoration: none;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  &:hover {
    color: ${COLORS.HEADER}
  }
`

const DropDown = styled.div`
  height: 600px;
  width: 500px;
  background: #fff;
  position: absolute;
  top: 0;
  left: ${props => props.leftOffset}px;
`

class SideNavigationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      name: ''
    }
    this.dropDown = React.createRef()
    this.sideNav = React.createRef()
  }

  showSideNavigation = (e, name) => {
    this.setState({ isOpen: true, name })
  }

  hideSideNavigation = (e) => {
    this.setState({ isOpen: false, name: '' })
  }

  render() {
    const { catalog } = this.props
    return (
      <Wrapper innerRef={comp => this.sideNav = comp}>
        {catalog.length && catalog.map(category => (
          <LinkWrapper
            key={category.id}
            onMouseEnter={(e) => this.showSideNavigation(e, category.name)}
            onMouseLeave={this.hideSideNavigation}
          >
            <StyledLink to={category.link}>{category.title}</StyledLink>
            {this.state.isOpen ?
              <DropDown
                innerRef={comp => this.dropDown = comp}
                leftOffset={this.sideNav.offsetWidth}
              >{this.state.name}</DropDown>
              : null}
          </LinkWrapper>
        ))}
      </Wrapper>
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
