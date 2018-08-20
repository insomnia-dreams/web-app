import React, { Component } from 'react'
import styled from 'styled-components'

const DropDown = styled.div`
  height: 600px;
  width: 500px;
  background: #fff;
  position: absolute;
  top: 0;
  left: ${props => props.leftOffset}px;
  `

const SubCategoryWrapper = styled.div`
  display: inline-block;
`

class DropDownComponent extends Component {
  render() {
    const { leftOffset, title, subCategories } = this.props
    return (
      <DropDown leftOffset={leftOffset}>
        {title}
        <div>
          {subCategories.map(subCategory => (
            <SubCategoryWrapper key={subCategory.id}>
              {subCategory.title}
            </SubCategoryWrapper>)
          )}
        </div>
      </DropDown>
    )
  }
}

export default DropDownComponent