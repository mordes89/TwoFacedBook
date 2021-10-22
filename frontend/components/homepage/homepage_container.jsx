import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Homepage from './homepage';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchComments } from '../../actions/comment_actions';



const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    navLink: <Link to="/post"/>,
    posts: state.entities.posts,
    users: state.entities.users,
    comments: state.entities.comments,
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  fetchUsers: () => dispatch(fetchUsers()), 
  fetchPosts: () => dispatch(fetchPosts()), 
  fetchComments: () => dispatch(fetchComments()),
});

export default connect(mSTP, mDTP)(Homepage);