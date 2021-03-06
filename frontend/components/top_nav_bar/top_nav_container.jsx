import React from 'react';
import {connect} from 'react-redux';
import NavBar from './top_nav_bar';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => ({
  currentUser: state.session.currentUser
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);