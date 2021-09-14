import * as APIUtil from '../util/post_util';
import { closeModal } from "./modal_actions"

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';


const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

// export const receiveErrors = errors => ({
//   type: RECEIVE_POST_ERRORS,
//   errors
// });

export const fetchPosts = () => dispatch => (
  APIUtil.fetchPosts()
  .then(posts => (dispatch(receivePosts(posts))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const fetchPost = postId => dispatch => (
  APIUtil.fetchPost(postId)
  .then(postId => (dispatch(receivePost(postId))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const createPost = formData => dispatch => (
  APIUtil.createPost(formData)
  .then(post => (dispatch(receivePost(post))),   
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const updatePost = post => dispatch => (
  APIUtil.updatePost(post)
  .then(post => (dispatch(receivePost(post))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const deletePost = postId => dispatch => (
  APIUtil.deletePost(postId)
  .then(() => (dispatch(removePost(postId))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);