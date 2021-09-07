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
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        <h1></h1>
        <h3>Connect with friends, enemies, cats, and predators on TwoFacedBook.</h3>
        <form onSubmit={this.handleSubmit}>          
            <label>Username:
              <input 
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            </label>
            <br />
            <label>Password:
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            </label>
            <br />
            <label>email:
              <input 
                type="email"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="email"
              />
            </label>
            <br />
            <label>First Name:
              <input 
                type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                placeholder="First Name"
              />
            </label>
            <br />
            <label>Last Name:
              <input 
                type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                placeholder="Last Name"
              />
            </label>
            <br />
            <label>Birthday:
              <input 
                type="date"
                value={this.state.birthday}
                onChange={this.update('birthday')}
                placeholder="Birthday"
              />
            </label>
            <br />            
            <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignupModal;