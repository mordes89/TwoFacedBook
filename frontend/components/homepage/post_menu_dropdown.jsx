import React from 'react';
import { closeModal } from '../../actions/modal_actions';


class PostMenuDropdown extends React.Component {
   constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
   }

   handleMenuClick(e) {
      console.log(this.state)
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
                     <h2 className="header-name">Edit Post</h2>
                  </div>
                  <hr className="hline-login"/>
                  <div className="logout-row">
                     <img src={window.logoutURL} className="logout-memu-icon"/>
                     <button 
                        className="menu-text"
                        onClick={this.props.logout}
                     >Move To Trash
                     </button>
                  </div>
               </ul>    
            </div>   
         : null;
      return (
         <div>            
            <img src={window.menuDotsURL} className="right-header-icons" onClick={e => this.handleMenuClick(e)}/>
            <>{menu}</>
         </div>
      ) 
   }
}

export default PostMenuDropdown;