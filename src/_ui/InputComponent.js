import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

class InputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  
  render() {
    return (
      <Wrapper>
        <input type="text" />
      </Wrapper>
    )
  }
}

export default InputComponent
