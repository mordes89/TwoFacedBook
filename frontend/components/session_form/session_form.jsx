import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.handleNewUser = this.handleNewUser.bind(this);
    this.pushHistory = this.pushHistory.bind(this);
  }
  pushHistory() {
    this.props.fetchUsers();
    this.props.history.push('/home');
  }


  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {    
    e.preventDefault();
    this.props.fetchUsers();
    this.props.processForm(Object.assign({}, this.state))
      .then(() => this.pushHistory())
  }

  handleDemoLogin(e) {        
    e.preventDefault();
    this.props.login({email: 'demouser@user.com', password: '123456'})
      .then(() => this.props.history.push('/home'));
  }

  // handleNewUser(e) {    
  //   e.preventDefault();
  //   const user = Object.assign({}, this.state);
  //   this.props.processForm(user)
  //     // .then(() => this.loginNewUser(user., pw))//this.props.closeModal);  
  // }

  renderErrors() {       
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error === `The email or password you entered are not connected to an account.` ? error : null}
          </li>
        ))}
      </ul>
    );
  }

  render() {    
    return (
      <div className="login-page">
        <div className="login-left-text">
          <h2 className="tfb">twofacedbook</h2>
          <br />
          <h3 className="under-tfb">Connect with friends, enemies, cats, and predators on TwoFacedBook.</h3>
        </div>
        <div className="main-form">        
        <form onSubmit={this.handleSubmit} className="actual-form">
              <input 
                type="email"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="login-field"
              />
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-field"
              />
              {/* <Link to="/"> */}
                <button type="submit" className="login-button">Log In</button>
              {/* </Link> */}
            <hr className="hline-login"/>
        </form>
            <h1 className="errors">{this.renderErrors()}</h1>
            <button 
              onClick={(e) => this.handleDemoLogin(e)} 
              className="demo-login">Demo User Login
            </button>
            <button 
              onClick={() => this.props.openModal('signup')} 
              className="create_user-button">Create New Account
            </button>    
        </div>

      </div>
      
    );
  }
}

export default SessionForm;
