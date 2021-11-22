import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';



const mSTP = state => {
  return {    
    errors: Object.values(state.errors.session),
    navLink: <Link to="/signup"/>,
  };
};

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SessionForm);
