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
      <div className="posts-and-bio">
        <div className="bio-container">
          <div>
            <p>Edit Bio</p>
          </div>
          <div id="bio-row">
            <p>{`Current Work: ${this.props.userProfile.first_name}`}</p>            
          </div>
          <div id="bio-row">
            <p>{`School: ${this.props.userProfile.last_name}`}</p>            
          </div>
          <div id="bio-row">
            <p>{`Address: ${this.props.userProfile.address || `Edit Address`}`}</p>            
          </div>
          <div id="bio-row">
            <p>From</p>
          </div>
          <div id="bio-row">
            <p>Relationship Status</p>
          </div>
          <div id="bio-row">
            <p>Joined TwoFacedBook</p>
          </div>
        </div>
      </div>
   );
  }
}

export default PostModal;