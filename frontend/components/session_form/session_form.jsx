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
    this.renderErrors = this.renderErrors.bind(this);
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
        {/* <img src={Icon}/> */}
        <h2 className="tfb">twofacedbook</h2>
        <br />
        <h3 className="under-tfb">Connect with friends, enemies, cats, and predators on TwoFacedBook.</h3>
        <form onSubmit={this.handleSubmit} className="main-form">          
            <h1>{this.renderErrors()}</h1>
            <label>
              <input 
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            </label>
            <br />
            <label>
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
