import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
import MenuDropdown from './menu_dropdown_container';


class Homepage extends React.Component {
  loggedIn () {
    return(
      <div>
        <header className="header">
          <div className="header-icons">
            <div className="header1">
              <img src={window.facebookroundURL} className="logo"/>
              <img src={window.searchURL} className="logo"/>
            </div>
            <div className="header2">
              <img src={window.homeURL} className="logo"/>
              <img src={window.videoURL} className="logo"/>
              <img src={window.marketURL} className="logo"/>
              <img src={window.friendsURL} className="logo"/>
              <img src={window.newsURL} className="logo"/>
            </div>
            <div className="header3">
              {/* <img src={window.appsURL} className="logo"/>
              <img src={window.messagesURL} className="logo"/>
              <img src={window.bellURL} className="logo"/> */}
              <MenuDropdown className="show-menu-dropdown"/>
            </div>    
          </div>   
        </header> 
        <div className="homepage-body">
          <div className="left-nav">
            <img src={window.userURL} className="logo"/>
            <h2 className="header-name">{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</h2>
          </div>
          <div className="middle-nav-newsfeed">
            <button onClick={() => this.props.openModal('post')} className="create_user-button">{`What's on your mind ${this.props.currentUser.first_name}?`}</button>    
            <ul>ihasdkla</ul>
            <ul>ihasdkla</ul>
            <ul>ihasdkla</ul>
            <ul>ihasdkla</ul>
            <ul>ihasdkla</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahsdadadsadjdgajdadgajbkdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
            <ul>ihsdoahdkl6</ul>
          </div>
          <div className="right-nav">
            <button onClick={() => this.props.openModal('post')} className="create_user-button">{`What's on your mind ${this.props.currentUser.first_name}?`}</button>    
            <ul>ihasdio</ul>
            <ul>ihasdio</ul>
            <ul>ihasdio</ul>
            <ul>ihasdio</ul>
            <ul>ihasdio</ul>
          </div>
        </div>
      </div>
    )
  };
  
  render() {    
    return (
      <div>
        {this.props.currentUser ? this.loggedIn() : null}        
      </div>
    )
  } 
};

export default Homepage;