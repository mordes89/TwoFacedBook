import React from 'react';
// import Icon from "../../app/pics/facebook";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.props)
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

  renderErrors() {    
    debugger
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
      <div>
        {/* <img src={Icon}/> */}
        <h3>Connect with friends, enemies, cats, and predators on TwoFacedBook.</h3>
        <form onSubmit={this.handleSubmit}>          
            {this.renderErrors()}
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
            <button type="submit">Log In</button>
        </form>
        <button type="submit" value={this.props.otherForm}>Creat New User</button>
        <br />
        <button onClick={(e) => this.handleDemoLogin(e)}>Demo User Login</button>
      </div>
    );
  }
}

export default SessionForm;
