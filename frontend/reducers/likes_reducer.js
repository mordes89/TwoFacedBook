import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_LIKE_ERRORS } from '../actions/like_actions';


const likeReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   let newState = {...oldState};
   switch(action.type) {
      case RECEIVE_LIKES: 
         return action.likes;
      case RECEIVE_LIKE:
         newState[action.like.id] = action.like;
         return newState;
      case REMOVE_LIKE:
         delete newState[action.likeId];
         return newState;
      case RECEIVE_LIKE_ERRORS:
         return action.errors;
      default:
         return oldState;  
   }
};
export default likeReducer;