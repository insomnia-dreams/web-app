import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as routes from '../_constants/routes'

const Wrapper = styled.div``

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

const HelpComponent = () => {
  return (
    <Wrapper>
      <StyledLink to={routes.HELP}>Help</StyledLink>
    </Wrapper>
  )
}

export default HelpComponent