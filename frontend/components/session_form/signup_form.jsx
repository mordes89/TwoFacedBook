import React from 'react';

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
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
    this.props.processForm(user);
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
        <h1 className="signup">Sign Up</h1>
        <h3 className="quick-and-easy">It's quick and easy.</h3>
        <hr className="hline-signup"/>
        <form onSubmit={this.handleSubmit}> 
          <h1 className="errors">{this.renderErrors()}</h1>
          <div className="centered-signup-form">
            <div className="name">
              <label>
                <input 
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  placeholder="First Name"
                  className="first_name"
                />
              </label>            
              <label>
                <input 
                  type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  placeholder="Last Name"
                  className="last_name"
                />
              </label>
            </div>
              <br />         
              <label>
                <input 
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                  className="upe"
                />
              </label>
              <br />
              <label>
                <input 
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className="upe"
                />
              </label>
              <br />
              <label>
                <input 
                  type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="email"
                  className="upe"
                />
              </label>
              <br />
              <label> <p className="bday">Birthday</p>
                <input 
                  type="date"
                  value={this.state.birthday}
                  onChange={this.update('birthday')}
                  placeholder="Birthday"
                  className="date"
                />
              </label>
              <br />            
              <button type="submit" className="signup-button">Sign Up</button>
            </div>
        </form>
      </div>
    );
  }
}

export default SignupModal;