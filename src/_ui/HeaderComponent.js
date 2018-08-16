import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import LogoComponent from './LogoComponent'
import InputComponent from './InputComponent'
import HelpComponent from './HelpComponent'
import CartComponent from './CartComponent'
import SignInLinkComponent from './SignInLinkComponent'
import SignUpLinkComponent from './SignUpLinkComponent'

import SignOutButton from './SignOut';
import * as routes from '../_constants/routes';

import MaxWidthWrapper from '../_ui/MaxWidthWrapper'
import { COLORS } from '../_constants/styles'

const Background = styled.div`
  background: ${COLORS.HEADER};
`

const HeaderComponent = ({ authUser }) => (
  <Background>
    <MaxWidthWrapper>
      {authUser ? <HeaderComponentAuth /> : <HeaderComponentNonAuth />}
    </MaxWidthWrapper>
  </Background>
)

const Header = styled.div`
  display: flex;
  height: 45px;
  a:hover {
    background: ${COLORS.HEADER_HOVER};
  }
`

const HeaderComponentNonAuth = () => {
  return (
    <Header>
      <LogoComponent />
      <InputComponent />
      <HelpComponent />
      <CartComponent />
      <SignInLinkComponent />
      {/* <SignUpLinkComponent /> */}
    </Header>
  )
}

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


const mapStateToProps = state => ({
  authUser: state.global.session.authUser
})

export default connect(mapStateToProps)(HeaderComponent)

