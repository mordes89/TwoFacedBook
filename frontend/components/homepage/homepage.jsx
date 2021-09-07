import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from'../../../app/pics/facebookround.png';





const Homepage = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">      
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign up!</Link>     
    </nav>
  );
  const personalGreeting = () => (
    <hgroup>
      <img src={logoImage} className="logo"/>
      <h2 className="header-name">(profile pic) {currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Homepage;