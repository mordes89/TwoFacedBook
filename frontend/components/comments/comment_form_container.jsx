import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createComment } from '../../actions/comment_actions';
import CommentModal from './comment_form';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    processForm: (formData) => dispatch(createComment(formData)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(CommentModal);