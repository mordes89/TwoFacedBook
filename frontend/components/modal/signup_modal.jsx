import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupFormContainer from '../session_form/signup_form_container';

function SignupModalf({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SignupModalf);