import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { updateComment, deleteComment} from '../../actions/comment_actions';
import CommentMenuDropdown from './comment_menu_dropdown';
import { openModal } from '../../actions/modal_actions';


const mSTP = ({ session, entities: { users }}, ownProps ) => {
  return {
    currentUser: users[session.id],
    comment: ownProps.comment
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  openModal: (modal, prop) => dispatch(openModal(modal, prop)),
});

export default connect(mSTP, mDTP)(CommentMenuDropdown);