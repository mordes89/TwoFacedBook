import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
import MenuDropdown from './menu_dropdown_container';


class Homepage extends React.Component {
  loggedIn () {
    return(
      <div>
        <header className="header">
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
        </header> 
        <div className="logout-row">
          <img src={window.userURL} className="logo"/>
          <h2 className="header-name">{this.props.currentUser.email}</h2>
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