import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../_constants/styles';

const DropDown = styled.div`
  height: 600px;
  width: 530px;
  position: absolute;
  top: 0;
  left: ${props => props.leftOffset}px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 5px rgba(0,0,0,.3);
  `

const CategoryTitleWrapper = styled.div`
  height: 10%;
  margin: 0 20px;
  padding: 15px 0;
`

const CategoryLink = styled(Link)`
  font-family: 'Source Sans Pro',sans-serif;
  font-weight: 200;
  font-size: 22px;
  color: ${COLORS.LINK_3};
  text-decoration: none;
  &:hover {
    color: ${COLORS.HEADER}
  }

`

const SubCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 90%;
`

const SubCategoryLinkWrapper = styled.div`
  padding: 7px 20px;
`

const SubCategoryLink = styled(Link)`
  height: 100%;
  color: ${COLORS.LINK_1};
  font-family: 'Source Sans Pro',sans-serif;
  font-weight: 400;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: ${COLORS.HEADER}
  }
`

class DropDownComponent extends Component {
  render() {
    const { leftOffset, category, subCategories } = this.props
    return (
      <DropDown leftOffset={leftOffset}>
        <CategoryTitleWrapper>
          <CategoryLink to={category.link}>
            {category.title}
          </CategoryLink>
        </CategoryTitleWrapper>
        <SubCategoriesWrapper>
          {subCategories.map(subCategory => (
            <SubCategoryLinkWrapper key={subCategory.id}>
              <SubCategoryLink to={subCategory.link}>
                {subCategory.title}
              </SubCategoryLink>
            </SubCategoryLinkWrapper>)
          )}
        </SubCategoriesWrapper>
      </DropDown>
    )
  }
}

export default DropDownComponent