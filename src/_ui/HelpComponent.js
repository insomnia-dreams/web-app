import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as routes from '../_constants/routes'

const Wrapper = styled.div``

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  text-decoration: none;
  color: #fff;
  font-family: 'Source Sans Pro', sans-serif;
`

const HelpComponent = () => {
  return (
    <Wrapper>
      <StyledLink to={routes.HELP}>Помощь</StyledLink>
    </Wrapper>
  )
}

export default HelpComponent