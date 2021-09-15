import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { updatePost, deletePost} from '../../actions/post_actions';
import PostMenuDropdown from './post_menu_dropdown';
import { openModal } from '../../actions/modal_actions';


const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId)),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(PostMenuDropdown);