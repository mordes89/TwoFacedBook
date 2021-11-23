import React from 'react';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      work: this.props.userProfile.work,
      school: this.props.userProfile.school,
      originally_from: this.props.userProfile.originally_from,
      address: this.props.userProfile.address,
      relationship: this.props.userProfile.relationship,
      birthday: this.props.userProfile.birthday,
      joinedTFB: this.props.userProfile.joinedTFB || this.props.userProfile.created_at,
      author_id: this.props.currentUser.id,
      photoUrl: null,
      photoFile: null,
      posts: this.props.posts
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleeidt = this.handleeidt.bind(this);
    
  } 

   handleeidt() {
      this.setState({ edit: !this.state.edit });
      console.log(this.state.edit);
   }


   update(field) {
      return e => this.setState({ [field]: e.target.value });
   }

   handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('user[id]', this.props.userProfile.id);
      formData.append('user[work]', this.state.work);
      formData.append('user[school]', this.state.school);
      formData.append('user[originally_from]', this.state.originally_from);
      formData.append('user[address]', this.state.address);
      formData.append('user[relationship]', this.state.relationship);
      formData.append('user[birthday]', this.state.birthday);
      formData.append('user[joinedTFB]', this.state.joinedTFB);
      if (this.state.photoFile) {  
         formData.append('user[photo]', this.state.photoFile);
      }   
      this.props.updateUser(formData);
      this.handleeidt();
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
                  <p>{`Current Work `}</p>            
                  <input 
                     type="text"
                     value={this.state.work}
                     onChange={this.update('work')}
                     placeholder="Current Work"
                     className="profile-input-field"
                  />
               </div>
            </div>
            <div id="bio-row">
               <img src={schoolURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`School `}</p>            
                  <input 
                     type="text"
                     value={this.state.school}
                     onChange={this.update('school')}
                     placeholder="Edit School"
                     className="profile-input-field"
                  />
               </div>
            </div>
            <div id="bio-row">
               <img src={locationURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`From `}</p>            
                  <input 
                     type="text"
                     value={this.state.originally_from}
                     onChange={this.update('originally_from')}
                     placeholder="Edit Originally-From"
                     className="profile-input-field"
                  />
               </div>
            </div>
            <div id="bio-row">
               <img src={houseURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Live in `}</p>            
                  <input 
                     type="text"
                     value={this.state.address}
                     onChange={this.update('address')}
                     placeholder="Edit Address"
                     className="profile-input-field"
                  />
               </div>
            </div>
            <div id="bio-row">
               <img src={heartURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Relationship Status `}</p>            
                  <input 
                     type="text"
                     value={this.state.relationship}
                     onChange={this.update('relationship')}
                     placeholder="Edit Relationship Status"
                     className="profile-input-field"
                  />
               </div>
            </div>
            <div id="bio-row">
               <img src={birthdayURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Birthday `}</p>            
                  <input 
                     type="text"
                     value={this.state.birthday}
                     onChange={this.update('birthday')}
                     placeholder="Edit Birthday"
                     className="profile-input-field"
                  />
               </div>
            </div>
            <div id="bio-row">
               <img src={timerURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Joined TwoFacedBook `}</p>            
                  <input 
                     type="text"
                     value={this.state.joinedTFB}
                     onChange={this.update('joinedTFB')}
                     placeholder="Edit Birthday"
                     className="profile-input-field"
                  />
               </div>
            </div>               
         </div>
         <button type="submit" className="save-edit-profile-button">Save</button>
         <button onClick={() => this.handleeidt()} className="cancel-edit-profile-button">Cancel</button>
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
                  <p id="bio-entry-bold">{` ${this.state.work || `Edit Work`}`}</p>            
               </div>
            </div>
            <div id="bio-row">
               <img src={schoolURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`School: `}</p>            
                  <p id="bio-entry-bold">{` ${this.state.school || `Edit school`}`}</p>            
               </div>
            </div>          
            <div id="bio-row">
               <img src={locationURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`From: `}</p>            
                  <p id="bio-entry-bold">{` ${this.state.originally_from || `Edit Origin`}`}</p>            
               </div>
            </div>          
            <div id="bio-row">
               <img src={houseURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Live in: `}</p>            
                  <p id="bio-entry-bold">{` ${this.state.address || `Edit Address`}`}</p>            
               </div>
            </div>
            <div id="bio-row">
               <img src={heartURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Relationship Status: `}</p>            
                  <p id="bio-entry-bold">{` ${this.state.relationship || `Edit Relationship Status`}`}</p>            
               </div>
            </div>
            <div id="bio-row">
               <img src={birthdayURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Birthday: `}</p>            
                  <p id="bio-entry-bold">{` ${this.state.birthday}`}</p>            
               </div>
            </div>
            <div id="bio-row">
               <img src={timerURL} className="profile-icon"/>
               <div id="bio-wording">
                  <p>{`Joined TwoFacedBook: `}</p>            
                  <p id="bio-entry-bold">{` ${this.state.joinedTFB}`}</p>            
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