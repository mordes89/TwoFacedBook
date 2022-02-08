import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class Footer extends React.Component {
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
            {(error === `The email or password you entered are not connected to an account.`)? error : null}
          </li>
        ))}
      </ul>
    );
  }

  render() {    
    return (
      <div className="footer-container">
          <div className="social-media-footer">
            <a href="https://mordes89.github.io/Portfolio/" target="_blank">
               <p className="LinkedIn-rightnav">Mike Schnall</p>
            </a>
            <a href="https://github.com/mordes89" target="_blank">
               <p className="LinkedIn-rightnav">GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/mike-mordechai-schnall/" target="_blank" className="right-nav-icon-row">
               <p className="LinkedIn-rightnav">LinkedIn</p>
            </a>
            <a href="https://angel.co/u/mike-schnall/" target="_blank" className="right-nav-icon-row">
               <p className="LinkedIn-rightnav">Angel List</p>
            </a>           
          </div>
          <hr className="hline-footer"/>
          <div className="social-media-footer">
            <p>Other projects:</p>         
            <a href="https://chord-pro-generator.herokuapp.com/#/" target="_blank">
               <p className="LinkedIn-rightnav">Chord Pro Generator</p>
            </a>
            <a href="https://mordes89.github.io/EXPLODING-HOT-POTATO-SOCCER-/" target="_blank">
               <p className="LinkedIn-rightnav">Exploding Hot Potato Soccer</p>
            </a>
            <a href="https://mordes89.github.io/Portfolio/" target="_blank">
            <p className="LinkedIn-rightnav">Portfolio website</p>
            </a>
          </div>
          <div className="social-media-footer">
             <p>Technologies used:</p>
             <a href="https://www.ruby-lang.org/en/documentation/" target="_blank">
                  <div className="technologies-used-row-footer">
                      {/* <img src={rubyonrailsURL} className="technologies-used-pic-footer"/> */}
                      <p className="technologies-used-p-footer">Ruby on Rails</p>
                  </div>
                </a>
                <a href="https://reactjs.org/docs/getting-started.html" target="_blank">
                  <div className="technologies-used-row-footer">
                      {/* <img src={reactURL} className="technologies-used-pic-footer"/> */}
                      <p className="technologies-used-p-footer">React (+Hooks)</p>
                  </div>
                </a>
                <a href="https://redux.js.org/introduction/getting-started" target="_blank">
                  <div className="technologies-used-row-footer">
                      {/* <img src={reduxURL} className="technologies-used-pic-footer"/> */}
                      <p className="technologies-used-p-footer">Redux</p>
                  </div>
                </a>
                <a href="https://sass-lang.com/guide" target="_blank">
                  <div className="technologies-used-row-footer">
                      {/* <img src={sassURL} className="technologies-used-pic-footer"/> */}
                      <p className="technologies-used-p-footer">CSS/SASS (+Mixins)</p>
                  </div>
                </a>
                
            
          </div>
          <div className="social-media-footer">
            <p>MS @ 2022</p>
          </div>
      </div>
      
    );
  }
}

export default Footer;
