import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';



class ProfileMenuDropdown extends React.Component {
   constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
   }

   handleMenuClick(e) {
      this.setState({show: !this.state.show})
   }

   render() {
      let menu = this.state.show ? 
            <div 
               className="menu-background" 
               onClick={e => this.handleMenuClick(e)}
            >
               <ul 
                  onClick={e => e.stopPropagation()} 
                  className="menu-dropdown"
               >
                  {/* <Link to={`/user/${this.props.currentUser.id}`}>
                     <div className="logout-row">
                        <img src={this.props.currentUser.profile_photo || window.userURL} className="logo"/>
                        <h2 className="header-name">{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</h2>
                     </div>
                  </Link> */}
                  {/* <hr className="hline-login"/> */}
                  <div className="logout-row"                         
                        onClick={this.props.logout}>
                     <img src={window.logoutURL} className="logout-memu-icon"/>
                     <button className="menu-text">Log Out</button>
                  </div>
               </ul>    
            </div>   
         : null;
      return (
         <div>
            <img src={window.downarrowURL} className="right-header-icons" onClick={e => this.handleMenuClick(e)}/>
            <>{menu}</>
         </div>
      ) 
   }
}

export default ProfileMenuDropdown;