import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchComments } from '../../actions/comment_actions';
import { 
  fetchLikes, createLike, deleteLike
} from '../../actions/like_actions';
import RenderPost from './render_posts.jsx';




const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    navLink: <Link to="/post"/>,
    // posts: state.entities.posts,
    users: state.entities.users,
    comments: state.entities.comments,
    likes: state.entities.likes,
    likesAmtProp: Object.values(state.entities.likes).length,
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  fetchUsers: () => dispatch(fetchUsers()), 
  fetchPosts: () => dispatch(fetchPosts()), 
  fetchComments: () => dispatch(fetchComments()),
  fetchLikes: () => dispatch(fetchLikes()),
  createLike: (formData) => dispatch(createLike(formData)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),
});

export default connect(mSTP, mDTP)(RenderPost);