import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

import * as routes from '../constants/routes';

const Header = styled.div`
  a {
    margin-right: 20px;
  }
`
const HeaderComponent = () => {
  return (
    <Header>
      <Link to={routes.LANDING}>Landing</Link>
      <Link to={routes.HOME}>Home</Link>
      <Link to={routes.SIGN_IN}>Sign in</Link>
      <Link to={routes.SIGN_UP}>Sign up</Link>
      <Link to={routes.HOME_CONTAINER}>Async Container</Link>
    </Header>
  )
}

export default HeaderComponent