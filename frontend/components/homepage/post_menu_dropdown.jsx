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
               className="post-menu-background"
               onClick={e => e.stopPropagation()} 
               // onClick={e => this.handleMenuClick(e)}
            >
               <ul 
                  onClick={e => e.stopPropagation()} 
                  className="post-post-menu-dropdown"
               >
                  <div className="post-logout-row">
                  <img src={window.logoutURL} className="post-memu-icon"/>  
                     <button 
                        className="post-menu-text"
                        onClick={() => this.props.updatePost(this.props.post)
                           .then(() => this.props.openModal('editPost'), this.handleMenuClick())}
                     >Edit Post
                     </button>
                  </div>
                  <hr className="post-hline-login"/>
                  <div className="post-logout-row">
                     <img src={window.logoutURL} className="post-memu-icon"/>
                     <button 
                        className="post-menu-text"
                        onClick={() => this.props.deletePost(this.props.post.id)
                           .then(this.handleMenuClick())}
                     >Move To Trash
                     </button>
                  </div>
               </ul>    
            </div>   
         : null;

         let menuIcon = (this.props.currentUser.id == this.props.post.author_id) ? 
            <img src={window.menuDotsURL} className="post-menu-icon" onClick={e => this.handleMenuClick(e)}/> 
            : null;
      return (
         <div> 
            {menuIcon}
            {menu}
         </div>
      ) 
   }
}

export default PostMenuDropdown;