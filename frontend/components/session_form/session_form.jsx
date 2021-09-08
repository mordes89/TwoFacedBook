import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {    
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state))
      .then( () => this.props.history.push('/signup'))
  }

  handleDemoLogin(e) {    
    e.preventDefault();
    this.props.login({username: 'demouser', password: '123456'})
  }

  handleNewUser(e) {    
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);  }

  renderErrors() {       
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
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
        <form onSubmit={this.handleSubmit} className="main-form">          
            <h1>{this.renderErrors()}</h1>
            <label>
              <input 
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className="login-field"
              />
            </label>
            <br />
            <label>
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-field"
              />
            </label>
            <br />
            <button type="submit" className="login-button">Log In</button>
            <button onClick={(e) => this.handleDemoLogin(e)} className="demo-login">Demo User Login</button>
            <hr className="hline-login"/>
            <button onClick={() => this.props.openModal('signup')} className="create_user-button">Create New Account</button>    
        </form>
      </div>
    );
  }
}

export default SessionForm;
