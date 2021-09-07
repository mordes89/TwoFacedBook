import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import TopNavBar from './top_nav_bar/top_nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import HomepageContainer from './homepage/homepage_container';



const App = () => (
  <div>
    {/* <Modal /> */}
    <header>
      {/* <Link to="/login"><h1>TwoFacedBook</h1></Link>  */}
      {/* <TopNavBar/> */}
      <HomepageContainer/>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute exact path="/" component={HomepageContainer} /> */}
    </Switch>
  </div>
);

export default App;
