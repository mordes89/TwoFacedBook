import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = state => {
  debugger
  return {    
    errors: state.errors.session,
    navLink: <Link to="/signup">Create New Account</Link>,
    // demoLoginLink: <Link to="/home">sign up instead</Link>,
  };
};

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(login(user)),
    // otherForm: (
    //   <button onClick={() => dispatch(openModal('signup'))}>
    //     Create Account
    //   </button>
    // ), closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SessionForm);
