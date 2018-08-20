import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { COLORS } from '../_constants/styles'
import DropDownComponent from './DropDownComponent'

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

class SideNavigationComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      categoryId: ''
    }
    this.sideNavigation = React.createRef()
  }

  showSideNavigation = (e, categoryId) => {
    this.setState({ isOpen: true, categoryId })
    this.findSubCategories(categoryId)
  }

  hideSideNavigation = (e) => {
    this.setState({ isOpen: false, categoryId: '' })
  }

  findSubCategories = (categoryId) => {
    const { shortCatalog, fullCatalog } = this.props
    const categoryPath = shortCatalog.filter(category => category.id === categoryId)[0].path
    const subCategories = fullCatalog.filter(category => category.path.includes(`${categoryPath}.`))
    return subCategories
  }

  render() {
    const { shortCatalog } = this.props
    return (
      <Wrapper innerRef={comp => this.sideNavigation = comp}>
        {shortCatalog.map(category => (
          <LinkWrapper
            key={category.id}
            onMouseEnter={(e) => this.showSideNavigation(e, category.id)}
            onMouseLeave={this.hideSideNavigation}
          >
            <StyledLink to={category.link}>{category.title}</StyledLink>
            {this.state.isOpen && this.state.categoryId === category.id ?
              <DropDownComponent 
                leftOffset={this.sideNavigation.offsetWidth} 
                title={category.title} 
                subCategories={this.findSubCategories(category.id)}
              />
              : null}
          </LinkWrapper>
        ))}
      </Wrapper>
    )
  }
}

export default SideNavigationComponent