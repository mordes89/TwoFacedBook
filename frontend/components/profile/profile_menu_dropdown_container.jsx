import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ProfileMenuDropdown from './profile_menu_dropdown';
import { openModal } from '../../actions/modal_actions';


const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(ProfileMenuDropdown);