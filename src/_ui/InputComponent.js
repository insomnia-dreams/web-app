import React, { Component } from 'react'
import styled from 'styled-components'

import { COLORS } from '../_constants/styles'

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  height: 100%;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
`

const Input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 15px;
  border: 0;
  outline: 0;
  padding: 0 20px;
  margin: 0 5px;
  font-size: 18px;
  box-shadow: none;
  font-family: 'Source Sans Pro', sans-serif;
  ::placeholder { 
    font-family: 'Source Sans Pro', sans-serif;
    color: ${COLORS.PLACEHOLDER};
}
`

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
        <Input type="text" placeholder='Поиск' />
      </Wrapper>
    )
  }
}

export default InputComponent
