import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { updateComment } from '../../actions/comment_actions';
import EditComment from './edit_comment_form';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
   //  comment: state.ui.modal.prop,  
    users: state.entities.users
  };
};

const mDTP = dispatch => {
  return {
    processForm: (commentId) => dispatch(updateComment(commentId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(EditComment);