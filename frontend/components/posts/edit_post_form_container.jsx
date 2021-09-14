import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import EditPostModal from './edit_post_form';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    processForm: (formData) => dispatch(createPost(formData)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(EditPostModal);