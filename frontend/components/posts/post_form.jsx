import React from 'react';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.processForm(post);    
  }  

  render() {
    return (
      <div className="post-form">
      <div className="title-and-x">
         <div className="hidden-x" onClick={this.props.closeModal}> </div>
         <h1 className="create-post">Create Post</h1>
         <button className="post-x" onClick={this.props.closeModal}>x</button>
      </div>       
      <hr className="hline-post"/>        
      <form onSubmit={this.handleSubmit}>
            <div className="user-row">
               <img src={window.userURL} className="logo"/>
               <h2 className="header-name">{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</h2>
            </div>
               <textarea
               value={this.state.body}
               onChange={this.update('body')}
               placeholder={`What's on your mind, ${this.props.currentUser.first_name}?`}
               className="post-body"
               /> 
         <div className="centered-post-form">
            <button 
               type="submit" 
               className={this.state.body ? "enabled-post-button" : "disabled-post-button"}
               disabled={this.state.body ? null : "disabled"}
            >Post
            </button>
         </div>
      </form>
   </div>
   );
  }
}

export default PostModal;