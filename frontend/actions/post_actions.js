export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
import { getPosts, getPost, createPost, updatePost, deletePost} from '../utils/post_util';


const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = post => ({
   type: REMOVE_POST,
   post
 });

export const fetchPosts = () => dispatch => {
  return getPosts()
    .then(posts => dispatch(receivePosts(posts)));
}

export const fetchPost = (postId) => dispatch => {
   return getPost(postId)
     .then(post => dispatch(receivePosts(post)));
}

export const createPost = (post) => dispatch => {
   return createPost(post)
     .then(post => dispatch(receivePost(post)));
}

export const updatePost = (post) => dispatch => {
   return updatePost(post)
     .then(post => dispatch(receivePost(post)));
}

export const deletePost = (postId) => dispatch => {
   return deletePost(postId)
     .then(() => dispatch(removePost(postId)));
}