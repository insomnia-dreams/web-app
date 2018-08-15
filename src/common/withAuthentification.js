import React from 'react';
import { connect } from "react-redux";
import { firebase } from '../firebase';
import AuthUserContext from './AuthUserContext';

import { setAuthUser } from "../duck/actions";


const withAuthentication = (Component) => {

  class WithAuthentication extends React.Component {

    componentDidMount() {
      const { setAuthUser } = this.props
      
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? setAuthUser(authUser)
          : setAuthUser(null)
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    setAuthUser: authUser => dispatch(setAuthUser(authUser))
  })

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;