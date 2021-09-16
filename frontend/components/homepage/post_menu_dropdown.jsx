import React from 'react';
import { closeModal } from '../../actions/modal_actions';


class PostMenuDropdown extends React.Component {
   constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
   }

   handleMenuClick(e) {
      this.setState({show: !this.state.show})
   }

   render() {
      let menuBackground = this.state.show ? <div className="post-menu-background" onClick={e => this.handleMenuClick(e)}> </div> : null;
      let menu = this.state.show ? 
            <div 
               // className="post-menu-background"
               // onClick={e => this.handleMenuClick(e)}
            >      
               <ul 
                  onClick={e => e.stopPropagation()} 
                  className="post-menu-dropdown"
               >
                  <div className="post-logout-row">
                  <img src={editURL} className="post-memu-icon"/>  
                     <button 
                        className="post-menu-text"
                        onClick={() => this.props.openModal('editPost', this.props.post)}
                     >Edit Post 
                     </button>
                  </div>
                  <hr className="post-hline-login"/>
                  <div className="post-logout-row">
                     <img src={deleteURL} className="post-memu-icon"/>
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
            {menuBackground}
         </div>
      ) 
   }
}

export default PostMenuDropdown;