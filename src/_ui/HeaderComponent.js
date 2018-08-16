import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import styled from "styled-components"

import SignOutButton from './SignOut';
import * as routes from '../_constants/routes';

import MaxWidthWrapper from '../_ui/MaxWidthWrapper'
import { COLORS } from '../_constants/styles'

const Background = styled.div`
  background: ${COLORS.HEADER};
`

const Header = styled.div``

const HeaderComponent = ({ authUser }) => (
  <Background>
    <MaxWidthWrapper>
      {authUser ? <HeaderComponentAuth /> : <HeaderComponentNonAuth />}
    </MaxWidthWrapper>
  </Background>
)

const HeaderComponentAuth = () => {
  return (
    <Header>
      <Link to={routes.LANDING}>Landing</Link>
      <Link to={routes.HOME}>Home</Link>
      <Link to={routes.ACCOUNT}>Account</Link>
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

