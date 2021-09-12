import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Homepage from './homepage';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = ({ session, entities: { users, posts } }) => {
  return {
    currentUser: users[session.id],
    navLink: <Link to="/post"/>,
    posts,
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
});

export default connect(mSTP, mDTP)(Homepage);