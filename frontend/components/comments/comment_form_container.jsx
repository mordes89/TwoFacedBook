import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createComment } from '../../actions/comment_actions';
import CommentModal from './comment_form';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';


const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments,
  };
};

const mDTP = dispatch => {
  return {
    processForm: (formData) => dispatch(createComment(formData)),
    closeModal: () => dispatch(closeModal()),
    fetchComments: () => dispatch(fetchComments()), 
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mSTP, mDTP)(CommentModal);