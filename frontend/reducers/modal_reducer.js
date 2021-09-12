import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POST } from '../actions/post_actions';



export default function modalReducer(oldState = null, action) {
  Object.freeze(oldState);
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      case RECEIVE_POST:
      case RECEIVE_CURRENT_USER: 
      return null;
    default:
      return oldState;
  }
}