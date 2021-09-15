import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupFormContainer from '../session_form/signup_form_container';
import PostFormContainer from '../posts/post_form_container';
import EditPostFormContainer from '../posts/edit_post_form_container';

function SignupModalf({modal, closeModal, prop}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'post':
      component = <PostFormContainer />;
      break;
    case 'editPost':
      component = <EditPostFormContainer post={prop}/>;
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