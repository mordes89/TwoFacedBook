import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { updatePost } from '../../actions/post_actions';
import EditPostModal from './edit_post_form';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    post: state.ui.modal.prop,    
  };
};

const mDTP = dispatch => {
  return {
    processForm: (postId) => dispatch(updatePost(postId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(EditPostModal);