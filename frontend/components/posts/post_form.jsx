import React from 'react';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.currentUser.id,
      photoUrl: null,
      photoFile: null,
      posts: this.props.posts
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
    formData.append('post[body]', this.state.body);
    formData.append('post[author_id]', this.state.author_id);
    if (this.state.photoFile) {  
      formData.append('post[photo]', this.state.photoFile);
    }   
    this.props.processForm(formData);
  }  

  handleFile(e){
    // this.setState({photoUrl: e.currentTarget.files[0]}); 
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
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="pic-preview"/> : null;
    return (
      <div className={preview ? "post-form-with-pic" : "post-form"}>
      <div className="title-and-x">
         <div className="hidden-x" onClick={this.props.closeModal}> </div>
         <h1 className="create-post">Create Post</h1>
         <button className="post-x" onClick={this.props.closeModal}>x</button>
      </div>       
      <hr className="hline-post"/>        
      <form onSubmit={this.handleSubmit}>
            <div className="user-row">
               <img src={this.props.currentUser.profile_photo || window.userURL} className="logo"/>
               <h2 className="header-name">{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</h2>
            </div>
               <textarea                
                value={this.state.body}
                onChange={this.update('body')}
                placeholder={`What's on your mind, ${this.props.currentUser.first_name}?`}
                className="post-body"
               />         
          {preview} 
         <div className= "centered-post-form">
            <div className="add-media-to-post-modal">
              <h1 className="Add-to-your-post">Add to your post</h1>
              <div className="media-link-icons-group">
                <div className="media-links">
                  {/* <img src={window.video_colorURL} className="media-icons-modal-vid"/> */}
                  {/* <h1 className="Video-hidden-text">Video</h1>                   */}
                </div>
                <div className="media-links">
                  {/* <img src={window.smiley_colorURL} className="media-icons-modal-smiley"/> */}
                  {/* <h1 className="picture-hidden-text">Picture</h1>                   */}
                </div>
                <div className="media-links">
                  <label>
                    <img
                      src={window.photo_colorURL} 
                      type="file"                      
                      className="media-icons-modal-pic"
                    />
                    <input 
                      type="file" 
                      onChange={this.handleFile} 
                      className="hidden-input-pic"/>
                  </label>
                  {/* <h1 className="feeling-hidden-text">Feeling/Activity</h1> */}
                </div>
              </div>
            </div>
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