import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import PostModal from './post_form';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    processForm: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(PostModal);