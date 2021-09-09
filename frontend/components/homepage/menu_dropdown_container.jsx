import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MenuDropdown from './menu_dropdown';
// import { openModal } from '../../actions/modal_actions';


// const mSTP = state => {
  
// };

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(null, mDTP)(MenuDropdown);