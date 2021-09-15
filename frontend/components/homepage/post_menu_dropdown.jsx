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
      console.log(this.props.post.id);
      let menu = this.state.show ? 
            <div 
               className="menu-background" 
               onClick={e => this.handleMenuClick(e)}
            >
               <ul 
                  onClick={e => e.stopPropagation()} 
                  className="post-menu-dropdown"
               >
                  <div className="logout-row">
                  <img src={window.logoutURL} className="logout-memu-icon"/>  
                     <button 
                        className="menu-text"
                        onClick={() => this.props.updatePost(this.props.post)
                           .then(() => this.props.openModal('editPost'))}
                     >Edit Post
                     </button>
                  </div>
                  <hr className="hline-login"/>
                  <div className="logout-row">
                     <img src={window.logoutURL} className="logout-memu-icon"/>
                     <button 
                        className="menu-text"
                        onClick={() => this.props.deletePost(this.props.post.id)}
                     >Move To Trash
                     </button>
                  </div>
               </ul>    
            </div>   
         : null;
      return (
         <div>            
            <img src={window.menuDotsURL} className="post-menu-icon" onClick={e => this.handleMenuClick(e)}/>
            <>{menu}</>
         </div>
      ) 
   }
}

export default PostMenuDropdown;