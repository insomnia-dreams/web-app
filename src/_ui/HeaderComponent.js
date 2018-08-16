import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { connect } from 'react-redux'

import SignOutButton from './SignOut';
import * as routes from '../_constants/routes';

const Header = styled.div`
  a {
    margin-right: 20px;
  }
`

const HeaderComponent = ({ authUser }) =>(
  <div>
    {authUser ? <HeaderComponentAuth /> : <HeaderComponentNonAuth />}
  </div>
)

const HeaderComponentAuth = () => {
  return (
    <Header>
      <Link to={routes.LANDING}>Landing</Link>
      <Link to={routes.HOME}>Home</Link>
      <Link to={routes.ACCOUNT}>Account</Link>
      <Link to={routes.HOME_CONTAINER}>Async Container</Link>
      <Link to={routes.ADMIN}>Admin</Link>
      <SignOutButton />
    </Header>
  )
}

const HeaderComponentNonAuth = () => {
  return (
    <Header>
      <Link to={routes.LANDING}>Landing</Link>
      <Link to={routes.SIGN_IN}>Sign in</Link>
      <Link to={routes.SIGN_UP}>Sign up</Link>
    </Header>
  )
}

const mapStateToProps = state => ({
  authUser: state.global.session.authUser
})

export default connect(mapStateToProps)(HeaderComponent)

