import React from 'react';
import { closeModal } from '../../actions/modal_actions';


class MenuDropdown extends React.Component {
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
                  <div className="logout-row">
                     <img src={window.userURL} className="logo"/>
                     <h2 className="header-name">{this.props.currentUser.email}</h2>
                  </div>
                  <hr className="hline-login"/>
                  <div className="logout-row">
                     <img src={window.logoutURL} className="logo"/>
                     <button 
                        className="menu-text"
                        onClick={this.props.logout}
                     >Log Out
                     </button>
                  </div>
               </ul>    
            </div>   
         : null;
      return (
         <div>
            <img src={window.downarrowURL} className="logo" onClick={e => this.handleMenuClick(e)}/>
            <>{menu}</>
         </div>
      ) 
   }
}

export default MenuDropdown;