import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SignupModal from './signup_form';
import { fetchUsers } from '../../actions/user_actions';


const mSTP = state => {
  return {
    errors: Object.values(state.errors.session),
  };
};

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers()), 
  };
};

export default connect(mSTP, mDTP)(SignupModal);
