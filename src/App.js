import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { firebase } from './firebase';

import HomeContainer from "./home/HomeContainer"

import * as routes from './constants/routes';
import HeaderComponent from "./common/HeaderComponent"
import LandingPage from './common/Landing';
import SignUpPage from './common/SignUp';
import SignInPage from './common/SignIn';
import PasswordForgetPage from './common/PasswordForget';
import HomePage from './common/Home';
import AccountPage from './common/Account';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <HeaderComponent authUser={this.state.authUser} />
          <hr />
          <Route exact path={routes.HOME_CONTAINER} component={() => <HomeContainer />} />
          <Route exact path={routes.LANDING} component={() => <LandingPage />} />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
          <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        </div>
      </Router>
    )
  }
}

export default App
