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

class DropDownComponent extends Component {
  render() {
    const { leftOffset, title } = this.props
    return (
      <DropDown leftOffset={leftOffset}>
        {title}
      </DropDown>
    )
  }
}

export default DropDownComponent