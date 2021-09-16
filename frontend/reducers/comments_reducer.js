import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';


const commentReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   let newState = {...oldState};
   switch(action.type) {
      case RECEIVE_COMMENTS: 
         return action.comments;
      case RECEIVE_COMMENT:
         newState[action.comment.id] = action.comment;
         return newState;
      case REMOVE_COMMENT:
         delete newState[action.commentId];
         return newState;
      case RECEIVE_COMMENT_ERRORS:
         return action.errors;
      default:
         return oldState;  
   }
};
export default commentReducer;