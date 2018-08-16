import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HeaderComponent from "./_ui/HeaderComponent"

import LandingContainer from './landing/LandingContainer'

import SignUpPage from './_ui/SignUp';
import SignInPage from './_ui/SignIn';
import PasswordForgetPage from './_ui/PasswordForget';
import HomePage from './_ui/Home';
import AccountPage from './_ui/Account';
import AdminPage from './_ui/Admin';

import * as routes from './_constants/routes';
import withAuthentification from './_ui/withAuthentification'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent />
          <hr />
          <Route exact path={routes.LANDING} component={() => <LandingContainer />} />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
          <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
          <Route exact path={routes.ADMIN} component={() => <AdminPage />} />
        </div>
      </Router>
    )
  }
}

export default withAuthentification(App)
