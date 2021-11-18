import {  RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {...oldState};
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser;
      return newState;
      // return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;