import React from 'react';
import { closeModal } from '../../actions/modal_actions';


class CommentMenuDropdown extends React.Component {
   constructor(props) {
    super(props);
    this.state = { 
       show: false,
       edit: false
      };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
   }

   handleMenuClick(e) {
      this.setState({show: !this.state.show})      
   }
   handleFocus() {
      // console.log("handleFocus");
      // this.setState({show: false})      
   }
   handleBlur() {
      // console.log("handleBlur");
      this.setState({show: false})      
   }

   toggleEdit(e){
      this.props.setComment_can_be_on(false)
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
      // console.log(this.props.comment);
   }

   render() {
      let menuIcon = (this.props.currentUser.id == this.props.comment.author_id) ? 
            <img src={window.menuDotsURL} 
               className="comment-menu-icon" 
               onClick={e => this.handleMenuClick(e)}                             
            /> 
            : null;

      let menuBackground = this.state.show ? <div className="menu-background" onClick={e => this.handleMenuClick(e)}></div> : null;
      let menu = this.state.show ? 
            <div 
               className="comment-menu-background"
               // onClick={e => this.handleMenuClick(e)}               
            >      
               <ul 
                  onClick={e => e.stopPropagation()} 
                  className="comment-menu-dropdown"                  
               >
                  <div className="logout-row">
                     <button 
                        className="comment-menu-text"
                        onClick={(e) => this.toggleEdit(e)}                                             
                     >Edit 
                     </button>
                  </div>
                  <div className="logout-row">
                     <button 
                        className="comment-menu-text"
                        onClick={
                           () => this.props.deleteComment(this.props.comment.id)
                           .then(this.handleMenuClick())}
                     >Delete
                     </button>
                  </div>
               </ul>    
            </div>   
         : null;

         
      return (
         <div> 
            {menuBackground}
            {menuIcon}
            <div
               // onFocus={(e) => this.handleFocus(e)} 
               // onBlur={(e) => this.handleBlur(e)} 
            >{menu}</div>
         </div>
      ) 
   }
}

export default CommentMenuDropdown;