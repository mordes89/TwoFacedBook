import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
import MenuDropdown from './menu_dropdown_container';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    console.log(this.state.show );
    this.setState({show: !this.state.show})
  }


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
            <img src={window.appsURL} className="logo"/>
            <img src={window.messagesURL} className="logo"/>
            <img src={window.bellURL} className="logo"/>
            <img src={window.downarrowURL} className="logo" onClick={e => this.handleMenuClick(e)}/> 

          </div>       
        </header> 
          <h2 className="header-name">(profile pic) {this.props.currentUser.email}</h2>
          {this.state.show ?  
            <MenuDropdown 
              onBlur={() => this.handleMenuClick()}
              // onClick={e => e.stopPropagation()} 
              className="show-menu-dropdown"/> : null
          }
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