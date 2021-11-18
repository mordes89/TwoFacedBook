import React from 'react';
import { updateComment } from '../../actions/comment_actions';

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
    this.handleeidt = this.handleeidt.bind(this);
    
  }

   handleeidt(e) {
      this.setState({ edit: !this.state.edit });
      console.log(this.state.edit);
   }


   update(field) {
      return e => this.setState({ [field]: e.target.value });
   }

   handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('user[body]', this.state.body);
      formData.append('user[author_id]', this.state.author_id);
      if (this.state.photoFile) {  
         formData.append('user[photo]', this.state.photoFile);
      }   
      this.props.updateUser(formData);
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
      let editBio = (
         <form onSubmit={this.handleSubmit}>         
         <div className="posts-and-bio">
         <div className="bio-container">          
            <div id="bio-row">
               <img src={workURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Current Work: `}</p>            
                  {/* <p id="bio-entry-bold">{` ${this.props.userProfile.work || `Edit Work`}`}</p>             */}
                  <input 
                     type="text"
                  //   value={` ${this.props.userProfile.work || `Edit Work`}`}
                     value={this.props.userProfile.work}
                     onChange={this.update('body')}
                     placeholder="Current Work"
                     className="first_name"
                  />
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
                  <p id="bio-entry-bold">{` ${this.props.userProfile.originally_from || `Edit Origin`}`}</p>            
               </div>
            </div>          
            <div id="bio-row">
               <img src={houseURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Live in: `}</p>            
                  <p id="bio-entry-bold">{` ${this.props.userProfile.address || `Edit Address`}`}</p>            
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
         <button type="submit" className="edit-profile-button">Save</button>
         <p onClick={(e) => this.handleeidt(e)}>Cancel</p>
      </div>
      </form>
      )

      let bio = (
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
                  <p id="bio-entry-bold">{` ${this.props.userProfile.originally_from || `Edit Origin`}`}</p>            
               </div>
            </div>          
            <div id="bio-row">
               <img src={houseURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Live in: `}</p>            
                  <p id="bio-entry-bold">{` ${this.props.userProfile.address || `Edit Address`}`}</p>            
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
         <button className="edit-profile-button" onClick={(e) => this.handleeidt(e)}>Edit Profile</button>
      </div>
      )

   //  const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="pic-preview"/> : null;
      return (      
         <div>
            {this.state.edit ? editBio : bio}
         </div>
      );
   }
}

export default PostModal;