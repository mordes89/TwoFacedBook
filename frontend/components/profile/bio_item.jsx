import React from 'react';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
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
   //  const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="pic-preview"/> : null;
    return (      
      <div className="posts-and-bio">
        <div className="bio-container">          
          <div id="bio-row">
            <img src={workURL} className="profile-icon"/>
            <div id="bio-wording">
               <p>{`Current Work: `}</p>            
               <p id="bio-entry-bold">{` ${this.props.userProfile.work || `Edit Work`}`}</p>            
            </div>
          </div>
          <div id="bio-row">
            <img src={schoolURL} className="profile-icon"/>
            <div id="bio-wording">
               <p>{`School: `}</p>            
               <p id="bio-entry-bold">{` ${this.props.userProfile.school || `Edit school`}`}</p>            
            </div>
          </div>          
          <div id="bio-row">
            <img src={locationURL} className="profile-icon"/>
            <div id="bio-wording">
               <p>{`From: `}</p>            
///////              <p id="bio-entry-bold">{` ${this.props.userProfile.born_in || `Edit Origin`}`}</p>            
            </div>
          </div>          
          <div id="bio-row">
            <img src={houseURL} className="profile-icon"/>
            <div id="bio-wording">
               <p>{`Live in: `}</p>            
////////             <p id="bio-entry-bold">{` ${this.props.userProfile.address || `Edit Address`}`}</p>            
            </div>
          </div>
          <div id="bio-row">
            <img src={heartURL} className="profile-icon"/>
            <div id="bio-wording">
               <p>{`Relationship Status: `}</p>            
               <p id="bio-entry-bold">{` ${this.props.userProfile.relationship || `Edit Relationship Status`}`}</p>            
            </div>
          </div>
          <div id="bio-row">
            <img src={birthdayURL} className="profile-icon"/>
            <div id="bio-wording">
               <p>{`Birthday: `}</p>            
               <p id="bio-entry-bold">{` ${this.props.userProfile.birthday}`}</p>            
            </div>
          </div>
          <div id="bio-row">
            <img src={timerURL} className="profile-icon"/>
            <div id="bio-wording">
               <p>{`Joined TwoFacedBook: `}</p>            
               <p id="bio-entry-bold">{` ${this.props.userProfile.created_at}`}</p>            
            </div>
          </div>  
        </div>
      </div>
   );
  }
}

export default PostModal;