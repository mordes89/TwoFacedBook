import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import PostModal from './post_form';
import { fetchPosts } from '../../actions/post_actions';


const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
  };
};

const mDTP = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()), 
    processForm: (formData) => dispatch(createPost(formData)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(PostModal);