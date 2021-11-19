import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers, updateUser } from '../../actions/user_actions';
import Profile from './profile';
import { openModal, closeModal } from '../../actions/modal_actions';



const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    navLink: <Link to="/post"/>,
    posts: state.entities.posts,
    users: state.entities.users
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  fetchPosts: () => dispatch(fetchPosts()), 
  fetchUsers: () => dispatch(fetchUsers()), 
  updateUser: (formData) => dispatch(updateUser(formData)), 
});

export default connect(mSTP, mDTP)(Profile);