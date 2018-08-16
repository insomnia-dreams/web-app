import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as routes from '../_constants/routes'

const Wrapper = styled.div`
  flex-basis: 12.6%;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  text-decoration: none;
  color: #fff;
  font-family: 'Lobster', cursive;
  font-size: 25px;
`

const LogoComponent = () => {
  return (
    <Wrapper>
      <StyledLink to={routes.LANDING}>logo</StyledLink>
    </Wrapper>
  )
}

export default LogoComponent