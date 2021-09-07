import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
  return (
    <header>
      <Link to="/login"><h1>TwoFacedBook</h1></Link> 
      <div>
        {display}
      </div>
    </header>
  )
}