import * as APIUtil from '../util/comment_util';
import { closeModal } from "./modal_actions"

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';


const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

// export const receiveErrors = errors => ({
//   type: RECEIVE_COMMENT_ERRORS,
//   errors
// });

export const fetchComments = () => dispatch => (
  APIUtil.fetchComments()
  .then(comments => (dispatch(receiveComments(comments))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const fetchComment = commentId => dispatch => (
  APIUtil.fetchComment(commentId)
  .then(commentId => (dispatch(receiveComment(commentId))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const createComment = formData => dispatch => (
  APIUtil.createComment(formData)
  .then(comment => (dispatch(receiveComment(comment))),   
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const updateComment = comment => dispatch => (
  APIUtil.updateComment(comment)
  .then(comment => (dispatch(receiveComment(comment))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const deleteComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId)
  .then(() => (dispatch(removeComment(commentId))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);