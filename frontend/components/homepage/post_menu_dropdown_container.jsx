import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { updatePost, deletePost} from '../../actions/post_actions';
import PostMenuDropdown from './post_menu_dropdown';
import { openModal } from '../../actions/modal_actions';


const mSTP = ({ session, entities: { users }}, ownProps ) => {
  return {
    currentUser: users[session.id],
    post: ownProps.post
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId)),
  openModal: (modal, prop) => dispatch(openModal(modal, prop)),
});

export default connect(mSTP, mDTP)(PostMenuDropdown);