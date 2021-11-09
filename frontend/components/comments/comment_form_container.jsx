import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createComment } from '../../actions/comment_actions';
import CommentModal from './comment_form';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchPosts, updatePost } from '../../actions/post_actions';



const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments,
    comment_on: ownProps.comment_on
  };
};

const mDTP = dispatch => {
  return {
    processForm: (formData) => dispatch(createComment(formData)),
    closeModal: () => dispatch(closeModal()),
    fetchComments: () => dispatch(fetchComments()), 
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts()), 
  };
};

export default connect(mSTP, mDTP)(CommentModal);