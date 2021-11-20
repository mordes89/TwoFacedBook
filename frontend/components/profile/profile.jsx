import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
// import MenuDropdown from './menu_dropdown_container';
// import PostMenuDropdown from './post_menu_dropdown_container';
import {useParams} from "react-router-dom";
import { fetchUsers } from '../../actions/user_actions';
import MenuDropdown from '../homepage/menu_dropdown_container';
import RenderPost from '../posts/render_posts_container.jsx';
import BioItem from './bio_item_container'




// class Profile extends React.Component {
//   constructor(props) {
//     super(props);    
//     this.state = {    
//     }
//     // this.renderPosts = this.renderPosts.bind(this); 
//     // this.autoReloader = this.autoReloader.bind(this); 
//   }
  
//   componentDidMount() {
//     this.props.fetchUsers();
//     // this.props.fetchPosts();
//     // this.props.fetchComments();
//     // this.props.fetchLikes();
//   }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (this.state.fetched === false) { 
//   //     this.props.fetchPosts();
//   //     this.setState({fetched: true})
//   //     console.log("hit cdm");
//   //     // this.state.prevPsotsLength = Object.values(this.props.posts).length;
//   //   }
//   // }



// //refactored to it's pwn render_posts file
//   // renderPosts() {    
     
//   //   if (!this.props.posts){
//   //     return null
//   //   }    
    
//   //   return(
//   //     <ul className="entire-post">
//   //       {Object.values(this.props.posts).reverse().map((post, i) => (
//   //         <ul key={`post-${i}`} id="posts">
//   //           {<PostItem 
//   //             post={post}
//   //             postId={post.id}
//   //             num_likes={(typeof post.likes !== 'undefined') ? Object.keys(post.likes).length : 0}
//   //           />}   
//   //         </ul>
//   //       ))}
//   //     </ul>
//   //   );
//   // }
  
  
//   loggedIn () {
//     return(
//       <div>
//         {this.props.currentUser.id}
//         Profile
//       </div>
//     )
//   };
  
  
//   render() {          
//     return (
//       <div>
//         {this.props.currentUser ? this.loggedIn() : null} 
//       </div>
//     )
//   } 
// };


// export default Profile;












const Profile = (props) => {
  let [users, setUsers] = useState(props.users);
  let [posts, setPosts] = useState(props.posts);
  const {id} = useParams();
  let [userProfile, setUserProfile] = useState(props.users[id]);

  let fetchUsers2 = () => fetchUsers(); 

  // useEffect(
  //   () => {
  //     fetchUsers2()
  //     console.log("fetchUsers")
  //     console.log("usersFetched:", users)
  //     // debugger
  //     // setUsers(props.users)
  //     // return () => setUsers(props.users)        
  //     //  Object.values(users).map((user) => (
  //     //     user.id === id ? (userProfile = user) : null))
  //   }, [users],
  //   // console.log("props.users:", props.users),
  //   console.log("state.entities.users.last:", props.users.last),
  //   console.log("state.entities.users:", props.users),
  //   console.log("users:", users),
  //   console.log("id:", id),
  //   console.log("userProfile:", userProfile),
  //   console.log("Object.values(users):", Object.values(users)),
  //   console.log("Object.values(users)[0].id:", Object.values(users)[0].id)
  // )

  if (window.performance) {
    if (performance.navigation.type == 1) {
      event.preventDefault();
      props.history.push('/home')
    }
  }

  // const initBeforeUnLoad = (showExitPrompt) => {
  //   window.onbeforeunload = (event) => {
  //     // Show prompt based on state
  //     if (showExitPrompt) {
  //       const e = event || window.event;
  //       e.preventDefault();
  //       if (e) {
  //         e.returnValue = ''
  //       }
  //       return '';
  //     }
  //   };
  // };






  let mapped = () => (Object.values(users).map((user, i) => (
    id ?
    <ul key={`user-${i}`} id="posts">
      {user.id}             
      {user.first_name}             
      {user.last_name}             
    </ul> : null
  )))

  // let homeLink = <button><Link to="/home">Home</Link></button>
  
  
  let [profilphotoUrl, setProfilphotoUrl] = useState(users[id].profile_photo || null);
  let [profilePhotoFile, setProfilePhotoFile] = useState(users[id].profile_photo || null);
  let [showSaveProfilePhoto, setShowSaveProfilePhoto] = useState(false);

  let handleProfilePicFile = (e) => {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      setProfilePhotoFile(file),
      setProfilphotoUrl(reader.result),
      setShowSaveProfilePhoto(true)
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setProfilphotoUrl('')
      setProfilePhotoFile(null)
    }
  }

  let handleProfilePhotoFileSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', id);    
    formData.append('user[profile_photo]', profilePhotoFile);
    props.updateUser(formData);
    setShowSaveProfilePhoto(false);
    props.history.push('/home')
  } 

  let [coverPhotoUrl, setCoverPhotoUrl] = useState(users[id].cover_photo || null);
  let [coverPhotoFile, setCoverPhotoFile] = useState(users[id].cover_photo || null);
  let [showSaveCoverPhoto, setShowSaveCoverPhoto] = useState(false);

  let handleCoverPhotoFile = (e) => {
    // this.setState({photoUrl: e.currentTarget.files[0]}); 
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      setCoverPhotoFile(file),
      setCoverPhotoUrl(reader.result),
      setShowSaveCoverPhoto(true)
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setCoverPhotoUrl('')
      setCoverPhotoFile(null)
    }   
    console.log("coverPhotoFile: ", coverPhotoFile)
  }

  let handleCoverPhotoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', id);    
    formData.append('user[cover_photo]', coverPhotoFile);
    props.updateUser(formData);
    setShowSaveCoverPhoto(false);
    // props.history.push('/home')
  } 





  let myPosts = (<div className="middle-nav-newsfeed2-profile">
  <div className="posting-box-profile">
    <div className="posting-query-profile">
      <img src={props.currentUser.profile_photo || userURL} className="post-user-pic-profile"/>
      <input 
        onClick={() => props.openModal('post')} 
        className="create_post-input-profile" 
        placeholder={`What's on your mind ${props.currentUser.first_name}?`}                  
      />    
    </div>
    <hr className="hline-posts-profile"/>
    <div className="add-media-to-post-profile">
      <div 
        className="media-links-post-profile"
        onClick={() => props.openModal('post')}
      >
        <img src={video_colorURL} className="media-icons-post-profile"/>
        <h1 className="media-text-post-profile">Video</h1>
      </div>
      <div 
        className="media-links-post-profile"
        onClick={() => props.openModal('post')}
      >
        <img src={photo_colorURL} className="media-icons-post-profile"/>
        <h1 className="media-text-post-profile">Photo</h1>
      </div>
      <div 
        className="media-links-post-profile"
        onClick={() => props.openModal('post')}
      >
        <img src={window.smiley_colorURL} className="media-icons-post-profile"/>
        <h1 className="media-text-post-profile">Feeling</h1>
      </div>
    </div>
      <RenderPost posts={props.posts}/>
      {/* <h1>{renderPosts()}</h1> */}
    </div>
  </div>)




  return (
    <div>
      <header className="header">
        <div className="header1">
          <img src={facebookroundURL} className="logo" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}/>
          {/* <img src={window.searchURL} className="logo"/> */}
        </div>
        <div className="header2">
          <img src={homeURL} className="middle-header-icons" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}/>
          {/* <img src={window.videoURL} className="middle-header-icons"/> */}
          {/* <img src={window.marketURL} className="middle-header-icons"/> */}
          {/* <img src={window.friendsURL} className="middle-header-icons"/> */}
          {/* <img src={window.newsURL} className="middle-header-icons"/> */}
        </div>
        <div className="header3">
          <Link to={`/user/${props.currentUser.id}`}>
            <div className="right-nav-icon-name">
              <img src={props.currentUser.profile_photo || userURL} className="user-logo-header"/>
              <h2 className="header-name">{props.currentUser.first_name}</h2>
            </div>
          </Link>
          {/* <img src={window.appsURL} className="logo"/>
          <img src={window.messagesURL} className="logo"/>
          <img src={window.bellURL} className="logo"/> */}
          <MenuDropdown className="show-menu-dropdown"/>
        </div>    
      </header>



      <div className="cover-photo-and-profile-photo">
        <div className="cover-photos-and-name">
          <div>
            <img src={coverPhoto1} id="cover-photo-pic"/>
            <div id="edit-cover-photo-container">
              {/* <img src={editPic} className="edit-cover-photo-pic"/>
              <p className="edit-cover-photo-text">Edit Cover Photo</p> */}
              {showSaveCoverPhoto ? 
                <label>
                  <img
                    src={saveIconURL} 
                    type="file"                      
                    className="edit-profile-photo"
                  />
                  <input 
                    type="file" 
                    onClick={handleCoverPhotoSubmit} 
                    className="hidden-input-pic"/>
                </label> 
                  :
                <label>
                    <div className="edit-cover-photo-pic-container">
                      <img
                        src={editPic} 
                        type="file"                      
                        className="edit-cover-photo-pic"
                      />
                      <p className="edit-cover-photo-text">Edit Cover Photo</p>
                    </div>
                  <input 
                    type="file" 
                    onChange={handleCoverPhotoFile} 
                    className="hidden-input-pic"/>
                </label>
              }



            </div>
          </div>


          <div className="profile-photo-and-name">
            <img src={!profilphotoUrl ? userURL : profilphotoUrl} className="profile-photo"/>
            {console.log("profilePhotoFile: ", profilePhotoFile)}

            {/* <img src={photo_color} className="edit-profile-photo"/>  */}
            {showSaveProfilePhoto ? 
            <label>
              <img
                src={saveIconURL} 
                type="file"                      
                className="edit-profile-photo"
              />
              <input 
                type="file" 
                onClick={handleProfilePhotoFileSubmit} 
                className="hidden-input-pic"/>
            </label> 
              :
            <label>
              <img
                src={photo_color} 
                type="file"                      
                className="edit-profile-photo"
              />
              <input 
                type="file" 
                onChange={handleProfilePicFile} 
                className="hidden-input-pic"/>
            </label>}


            <div className="profile-name">{userProfile.first_name} {userProfile.last_name}</div>
          </div>
        </div>
      </div>
      

      <div className="myPosts-section">
        <BioItem userProfile={userProfile}/>    
        {myPosts}
      </div>
      {/* {mapped()} */}
    </div>
  )  
};

export default Profile;