import * as APIUtil from '../util/like_util';
import { closeModal } from "./modal_actions"

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';


const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});

// export const receiveErrors = errors => ({
//   type: RECEIVE_LIKE_ERRORS,
//   errors
// });

export const fetchLikes = () => dispatch => (
  APIUtil.fetchLikes()
  .then(likes => (dispatch(receiveLikes(likes))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const fetchLike = likeId => dispatch => (
  APIUtil.fetchLike(likeId)
  .then(likeId => (dispatch(receiveLike(likeId))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const createLike = formData => dispatch => (
  APIUtil.createLike(formData)
  .then(like => (dispatch(receiveLike(like))),   
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const deleteLike = likeId => dispatch => (
  APIUtil.deleteLike(likeId)
  .then(() => (dispatch(removeLike(likeId))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);