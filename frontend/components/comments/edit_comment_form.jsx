import React from 'react';

class EditComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      author_id: this.props.currentUser.id,
      id: this.props.comment.id,
      photoUrl: null,
      photoFile: null,

      edit: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment[body]', this.state.body);
    formData.append('comment[author_id]', this.state.author_id);
    formData.append('comment[id]', this.state.id);
    formData.append('comment[edit]', false);
    if (this.state.photoFile) {  
      formData.append('comment[photo]', this.state.photoFile);
    }
    this.props.processForm(formData);
    return e => this.setState({ ['edit']: false });
  }  

  handleFile(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => this.setState({ photoUrl: reader.result, photoFile: file });
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }   
  }

  render() {
   let commentContainer = this.props.comment.edit ?  
   <form className="posting-query" onSubmit={(e) => this.handleSubmit(e)}>
      {/* <img src={window.userURL} className="post-user-pic"/> */}
      <input 
         defaultValue={this.props.comment.body}
         onChange={this.update('body')}     
         className="edit-comment-input" 
         />     
      <button className="hidden-input-pic">submit</button>
   </form>
   :
   <div className="comment-name-and-body">
      <li className="comment-author">{`${this.props.users[this.props.comment.author_id].first_name} ${this.props.users[this.props.comment.author_id].last_name}`}</li>
      <li className="comment-body-homepage">{this.props.comment.body}</li>
      {/* <img src={comment.photoUrl} className="comment-pic-homepage"/> */}
   </div>
    return (
      <div className="comment-form">
         {commentContainer}
      </div>
   );
  }
}

export default EditComment;