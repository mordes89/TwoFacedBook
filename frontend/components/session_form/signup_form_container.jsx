import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupModal from './signup_form';

const mSTP = state => {
  return {
    errors: state.errors.session,
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mSTP, mDTP)(SignupModal);
