import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_POST_ERRORS } from '../actions/post_actions';


const postReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   let newState = {...oldState};
   switch(action.type) {
      case RECEIVE_POSTS: 
         return action.posts;
      case RECEIVE_POST:
         newState[action.post.id] = action.post;
         return newState;
      case REMOVE_POST:
         delete newState[action.postId];
         return newState;
      case RECEIVE_POST_ERRORS:
         return action.errors;
      default:
         return oldState;  
   }
};
export default postReducer;