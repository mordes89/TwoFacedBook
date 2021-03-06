import React from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import TopNavBar from './top_nav_bar/top_nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomepageContainer from './homepage/homepage_container';
import PostFormContainer from './posts/post_form_container';
import EditPostFormContainer from './posts/edit_post_form_container';
import ProfileContainer from './profile/profile_container';
import Modal from './modal/modal';



const App = () => (
  <div>    
    <header>
      <Modal />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/" component={LogInFormContainer} />
      {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      <ProtectedRoute exact path="/home" component={HomepageContainer} />
      <ProtectedRoute exact path="/post" component={PostFormContainer} />
      <ProtectedRoute exact path="/edit_post" component={EditPostFormContainer} />
      <ProtectedRoute exact path="/user/:id" component={ProfileContainer} />
    </Switch>
    <footer className="footer">
      {/* Created by Mike Schnall */}
    </footer>
  </div>
);

export default withRouter(App);
