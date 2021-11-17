import React from 'react';

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(this.props.login({email: user.email, password: user.password})
      .then(() => this.props.history.push('/home')))   
  }

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
      <div className="signup-form">
        <div className="title-and-x">
          <h1 className="signup">Sign Up</h1>
          <div className="signup-x" onClick={this.props.closeModal}>x</div>
        </div>
        <h3 className="quick-and-easy">It's quick and easy.</h3>
        
        <hr className="hline-signup"/>        
        <form onSubmit={this.handleSubmit}>
          <h1 className="errors">{this.renderErrors()}</h1>
            <div className="centered-signup-form">
              <div className="name">
                  <input 
                    type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    placeholder="First Name"
                    className="first_name"
                  />
                  <input 
                    type="text"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                    placeholder="Last Name"
                    className="last_name"
                  />
              </div>
                <input 
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                  className="login-email"
                />
                <input 
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="New Password"
                  className="login-password"
                />
                <p className="bday">Birthday</p>
                <input 
                  type="date"
                  value={this.state.birthday}
                  onChange={this.update('birthday')}
                  placeholder="Birthday"
                  className="date"
                />
                <br />
              <button type="submit" className="signup-button">Sign Up</button>
            </div>
        </form>
      </div>
    );
  }
}

export default SignupModal;