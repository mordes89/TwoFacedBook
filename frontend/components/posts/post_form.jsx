import React from 'react';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.currentUser.id,
      photoUrl: null
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
    formData.append('post[title]', this.state.title);
    if (this.state.photoFile) {
  
      formData.append('post[photo]', this.state.photoFile);
    }
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }); 
  }  

  handleFile(e){
    this.setState({photoUrl: e.currentTarget.files[0]});    
  }

  render() {
    console.log(this.state);

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
            <div className="add-media-to-post-modal">
              <h1 className="Add-to-your-post">Add to your post</h1>
              <div className="media-link-icons-group">
                <div className="media-links">
                  <img src={window.video_colorURL} className="media-icons-modal-vid"/>
                  {/* <h1 className="Video-hidden-text">Video</h1>                   */}
                </div>
                <div className="media-links">
                  <img src={window.photo_colorURL} className="media-icons-modal-pic"/>
                  {/* <h1 className="picture-hidden-text">Picture</h1>                   */}
                </div>
                <div className="media-links">
                  <label>
                    <img
                      src={window.smiley_colorURL} 
                      type="file"                      
                      className="media-icons-modal-smiley"
                    />
                    <input 
                      type="file" 
                      onChange={this.handleFile.bind(this)} 
                      className="hidden-input-smiley"/>
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