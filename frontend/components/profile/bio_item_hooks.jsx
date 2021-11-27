// import React from 'react';

// // class PostModal extends React.Component {
// //   constructor(props) {
// //     super(props);
// const PostModal = (props) => {
//    let [edit, setEdit] = useState(false);
//    let [work, setWork] = useState(props.userProfile.work);
//    let [school, setschool] = useState(props.userProfile.school);
//    let [originally_from, setOriginally_from] = useState(props.userProfile.originally_from);
//    let [address, setAddress] = useState(props.userProfile.address);
//    let [relationship, setRelationship] = useState(props.userProfile.relationship);
//    let [birthday, setBirthday] = useState(props.userProfile.birthday);
//    let [joinedTFB, setJoinedTFB] = useState(props.userProfile.joinedTFB || props.userProfile.created_at);
//    let [author_id, setAuthor_id] = useState(props.currentUser.id);
//    let [photoUrl, setPhotoUrl] = useState(null);
//    let [photoFile, setPhotoFile] = useState(null);
//    let [posts, setPosts] = useState(props.posts);
   
//    useEffect(
//       () => {      
//       setEdit(false);
//       setWork(props.userProfile.work);
//       setschool(props.userProfile.school);
//       setOriginally_from(props.userProfile.originally_from);
//       setAddress(props.userProfile.address);
//       setRelationship(props.userProfile.relationship);
//       setBirthday(props.userProfile.birthday);
//       setJoinedTFB(props.userProfile.joinedTFB || props.userProfile.created_at);
//       setAuthor_id(props.currentUser.id);
//       setPosts(props.posts);
      
//       }, [id],      
//       console.log("id from bio:", id),     
//    )

//    //  this.state = {
//       // edit: false,
//       // work: this.props.userProfile.work,
//       // school: this.props.userProfile.school,
//       // originally_from: this.props.userProfile.originally_from,
//       // address: this.props.userProfile.address,
//       // relationship: this.props.userProfile.relationship,
//       // birthday: this.props.userProfile.birthday,
//       // joinedTFB: this.props.userProfile.joinedTFB || this.props.userProfile.created_at,
//       // author_id: this.props.currentUser.id,
//    //    photoUrl: null,
//    //    photoFile: null,
//    //    posts: this.props.posts,
//    //    two: 0
//    //  };
//    //  this.handleSubmit = this.handleSubmit.bind(this);
//    //  this.handleFile = this.handleFile.bind(this);
//    //  this.handleeidt = this.handleeidt.bind(this);
    
// //   }

   
  
// //   componentDidUpdate(prevProps, prevState) {
// //      if (this.state.two < 2) {
// //         console.log(this.state.work);
// //         this.setState({ edit: false })
// //         this.setState({ work: this.props.userProfile.work })
// //         this.setState({ school: this.props.userProfile.school })
// //         this.setState({ originally_from: this.props.userProfile.originally_from })
// //         this.setState({ address: this.props.userProfile.address })
// //         this.setState({ relationship: this.props.userProfile.relationship })
// //         this.setState({ birthday: this.props.userProfile.birthday })
// //         this.setState({ joinedTFB: this.props.userProfile.joinedTFB || this.props.userProfile.created_at })
// //         this.setState({ author_id: this.props.currentUser.id })

// //         this.setState({two: this.state.two + 1})
// //      }
// //   }


  

//    handleeidt = () => {
//       setEdit({ edit: !edit });
//       console.log(edit);
//    }


//    update = (field) => {
//       setEdit( target.value );
//    }

//    handleSubmit(e) {
//       e.preventDefault();
//       const formData = new FormData();
//       formData.append('user[id]', props.userProfile.id);
//       formData.append('user[work]', work);
//       formData.append('user[school]', school);
//       formData.append('user[originally_from]', originally_from);
//       formData.append('user[address]', address);
//       formData.append('user[relationship]', relationship);
//       formData.append('user[birthday]', birthday);
//       formData.append('user[joinedTFB]', joinedTFB);
//       if (photoFile) {  
//          formData.append('user[photo]', photoFile);
//       }   
//       props.updateUser(formData);
//       handleeidt();
//    }  

//    handleFile(e){
//       // this.setState({photoUrl: e.currentTarget.files[0]}); 
//       const reader = new FileReader();
//       const file = e.currentTarget.files[0];
//       reader.onloadend = () => setPhotoUrl( reader.result );
//       reader.onloadend = () => setPhotoFile( file );
//       if (file) {
//          reader.readAsDataURL(file);
//       } else {
//          this.setState({ photoUrl: "", photoFile: null });
//       }   
//    }
//    render() {
//       let editBio = (
//          <form onSubmit={this.handleSubmit}>         
//          <div className="posts-and-bio">
//          <div className="bio-container">          
//             <div id="bio-row">
//                <img src={window.workURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Current Work `}</p>            
//                   <input 
//                      type="text"
//                      value={this.state.work}
//                      onChange={this.update('work')}
//                      placeholder="Current Work"
//                      className="profile-input-field"
//                   />
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.schoolURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`School `}</p>            
//                   <input 
//                      type="text"
//                      value={this.state.school}
//                      onChange={this.update('school')}
//                      placeholder="Edit School"
//                      className="profile-input-field"
//                   />
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.locationURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`From `}</p>            
//                   <input 
//                      type="text"
//                      value={this.state.originally_from}
//                      onChange={this.update('originally_from')}
//                      placeholder="Edit Originally-From"
//                      className="profile-input-field"
//                   />
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.houseURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Live in `}</p>            
//                   <input 
//                      type="text"
//                      value={this.state.address}
//                      onChange={this.update('address')}
//                      placeholder="Edit Address"
//                      className="profile-input-field"
//                   />
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.heartURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Relationship Status `}</p>            
//                   <input 
//                      type="text"
//                      value={this.state.relationship}
//                      onChange={this.update('relationship')}
//                      placeholder="Edit Relationship Status"
//                      className="profile-input-field"
//                   />
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.birthdayURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Birthday `}</p>            
//                   <input 
//                      type="text"
//                      value={this.state.birthday}
//                      onChange={this.update('birthday')}
//                      placeholder="Edit Birthday"
//                      className="profile-input-field"
//                   />
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.timerURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Joined TwoFacedBook `}</p>            
//                   <input 
//                      type="text"
//                      value={this.state.joinedTFB}
//                      onChange={this.update('joinedTFB')}
//                      placeholder="Edit Birthday"
//                      className="profile-input-field"
//                   />
//                </div>
//             </div>               
//          </div>
//          <button type="submit" className="save-edit-profile-button">Save</button>
//          <button onClick={() => this.handleeidt()} className="cancel-edit-profile-button">Cancel</button>
//       </div>
//       </form>
//       )



//       let bio = (
//       <div className="posts-and-bio">
//          <div className="bio-container">          
//             <div id="bio-row">
//                <img src={window.workURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Current Work: `}</p>            
//                   <p id="bio-entry-bold">{` ${this.state.work || `Edit Work`}`}</p>            
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.schoolURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`School: `}</p>            
//                   <p id="bio-entry-bold">{` ${this.state.school || `Edit school`}`}</p>            
//                </div>
//             </div>          
//             <div id="bio-row">
//                <img src={window.locationURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`From: `}</p>            
//                   <p id="bio-entry-bold">{` ${this.state.originally_from || `Edit Origin`}`}</p>            
//                </div>
//             </div>          
//             <div id="bio-row">
//                <img src={window.houseURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Live in: `}</p>            
//                   <p id="bio-entry-bold">{` ${this.state.address || `Edit Address`}`}</p>            
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.heartURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Relationship Status: `}</p>            
//                   <p id="bio-entry-bold">{` ${this.state.relationship || `Edit Relationship Status`}`}</p>            
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.birthdayURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Birthday: `}</p>            
//                   <p id="bio-entry-bold">{` ${this.state.birthday}`}</p>            
//                </div>
//             </div>
//             <div id="bio-row">
//                <img src={window.timerURL} className="profile-icon"/>
//                <div id="bio-wording">
//                   <p>{`Joined TwoFacedBook: `}</p>            
//                   <p id="bio-entry-bold">{` ${this.state.joinedTFB}`}</p>            
//                </div>
//             </div>  
//          </div>
//          <button className="edit-profile-button" onClick={(e) => this.handleeidt(e)}>Edit Profile</button>
//       </div>
//       )

//    //  const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="pic-preview"/> : null;
//       return (      
//          <div>
//             {this.state.edit ? editBio : bio}
//          </div>
//       );
//    }
// }

// export default PostModal;