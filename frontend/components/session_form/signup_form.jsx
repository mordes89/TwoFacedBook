import React from 'react';
import { closeModal } from '../../actions/modal_actions';


class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: '',
      firstNameErr: true,
      lastNameErr: true,
      emailErr: true,
      passwordErr: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.loginNewUser = this.loginNewUser.bind(this);

  }

  loginNewUser(e) {        
    e.preventDefault();
    this.props.fetchUsers();
    this.props.login({email: this.state.email, password: this.state.password})
      // .then(this.props.history.push('/home'));
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() => this.loginNewUser(e))
    
  }

// First name can't be blank
// Last name can't be blank
// Email can't be blank
// Email is invalid
// Password is too short (minimum is 6 characters)

  renderErrors() {       
    return(
      <ul>
        {this.props.errors.map((error, i) => (          
          <li key={`error-${i}`}>
            {error === `Password is too short (minimum is 6 characters)` ? error : null}
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
        <form>
          <h1 className="errors">{this.renderErrors()}</h1>
            <div className="centered-signup-form">
              <div className="name">
                  <input 
                    type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    placeholder="First Name"
                    className="first_name"
                    id={this.props.errors.includes(`First name can't be blank`) ? "red-border-error" : null}
                  />
                  <input 
                    type="text"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                    placeholder="Last Name"
                    className="last_name"
                    id={this.props.errors.includes(`Last name can't be blank`) ? "red-border-error" : null}
                  />
              </div>
                <input 
                  type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                  className="login-email"
                  id={this.props.errors.includes(`Email can't be blank`) || this.props.errors.includes(`Email is invalid`) ? "red-border-error" : null}
                  />
                <input 
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="New Password"
                  className="login-password"
                  id={this.props.errors.includes(`Password is too short (minimum is 6 characters)`) ? "red-border-error" : null}
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
              <button type="submit" className="signup-button" onClick={this.handleSubmit}>Sign Up</button>
            </div>
        </form>
      </div>
    );
  }
}

export default SignupModal;