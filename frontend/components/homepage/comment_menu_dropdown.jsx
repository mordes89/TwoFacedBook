import React from 'react';
import { closeModal } from '../../actions/modal_actions';


class CommentMenuDropdown extends React.Component {
   constructor(props) {
    super(props);
    this.state = { 
       show: false,
       edit: false
      };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
   }

   handleMenuClick(e) {
      this.setState({show: !this.state.show})      
   }

   toggleEdit(e){
      const formData = new FormData();
      formData.append('comment[body]', this.props.comment.body);
      formData.append('comment[author_id]', this.props.comment.author_id);
      formData.append('comment[id]', this.props.comment.id);
      formData.append('comment[edit]', true);
      if (this.state.photoFile) {  
         formData.append('comment[photo]', this.props.comment.photoFile);
      }
      this.props.updateComment(formData);
      this.setState({show: !this.state.show})
      console.log(this.props.comment);
   }

   render() {
      let menuIcon = (this.props.currentUser.id == this.props.comment.author_id) ? 
            <img src={window.menuDotsURL} className="comment-menu-icon" onClick={e => this.handleMenuClick(e)}/> 
            : null;

      // let menuBackground = this.state.show ? <div className="comment-menu-background" onClick={e => this.handleMenuClick(e)}></div> : null;
      let menu = this.state.show ? 
            <div 
               // className="comment-menu-background"
               // onClick={e => this.handleMenuClick(e)}
            >      
               <ul 
                  onClick={e => e.stopPropagation()} 
                  className="comment-menu-dropdown"
               >
                  <div className="logout-row">
                  {/* <img src={editURL} className="comment-memu-icon"/>   */}
                     <button 
                        className="comment-menu-text"
                        onClick={(e) => this.toggleEdit(e)} 
                        onBlur={this.handleMenuClick}                      
                     >Edit Comment 
                     </button>
                  </div>
                  {/* <hr className="comment-hline-login"/> */}
                  <div className="logout-row">
                     {/* <img src={deleteURL} className="comment-memu-icon"/> */}
                     <button 
                        className="comment-menu-text"
                        onClick={() => this.props.deleteComment(this.props.comment.id)
                           .then(this.handleMenuClick())}
                     >Move To Trash
                     </button>
                  </div>
               </ul>    
            </div>   
         : null;

         
      return (
         <div> 
            {/* {menuBackground} */}
            {menuIcon}
            {menu}
         </div>
      ) 
   }
}

export default CommentMenuDropdown;