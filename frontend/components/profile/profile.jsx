import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
// import MenuDropdown from './menu_dropdown_container';
// import PostMenuDropdown from './post_menu_dropdown_container';
import {useParams} from "react-router-dom";
import { fetchUsers } from '../../actions/user_actions';
import MenuDropdown from '../homepage/menu_dropdown_container';




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


  let coverPhoto = <img src={coverPhoto1} className="cover-photo"/>








  let mapped = () => (Object.values(users).map((user, i) => (
    id ?
    <ul key={`user-${i}`} id="posts">
      {user.id}             
      {user.first_name}             
      {user.last_name}             
    </ul> : null
  )))

  let homeLink = <button><Link to="/home">Home</Link></button>
  
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
              <img src={userURL} className="user-logo-header"/>
              <h2 className="header-name">{props.currentUser.first_name}</h2>
            </div>
          </Link>
          {/* <img src={window.appsURL} className="logo"/>
          <img src={window.messagesURL} className="logo"/>
          <img src={window.bellURL} className="logo"/> */}
          <MenuDropdown className="show-menu-dropdown"/>
        </div>    
      </header>




        {coverPhoto}
        {homeLink}
        {/* {users[id].first_name} */}
        {userProfile.first_name}
        {mapped()}
    </div>
  )  
};

export default Profile;