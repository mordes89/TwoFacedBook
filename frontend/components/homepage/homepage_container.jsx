import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Homepage from './homepage';
import { openModal } from '../../actions/modal_actions';


const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    navLink: <Link to="/post"/>,
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(Homepage);