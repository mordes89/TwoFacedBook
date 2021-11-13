import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
// import MenuDropdown from './menu_dropdown_container';
// import PostMenuDropdown from './post_menu_dropdown_container';
import {useParams} from "react-router-dom";



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
  let [userProfile, setUserProfile] = useState(0);

  const {id} = useParams();
  
  useEffect(
    () => {
      props.fetchUsers() 
      // setUsers(props.users)
      // return () => setUsers(props.users)        
      //  Object.values(users).map((user) => (
      //     user.id === id ? (userProfile = user) : null))
    }, [props.users],
    // console.log("props.users:", props.users),
    console.log("state.entities.users.last:", props.users.last),
    console.log("state.entities.users:", props.users),
    console.log("users:", users),
    console.log("id:", id),
    console.log("userProfile:", userProfile),
    console.log("Object.values(users):", Object.values(users)),
    console.log("Object.values(users)[0].id:", Object.values(users)[0].id)
 )

 let mapped = () => (Object.values(users).map((user, i) => (
  <ul key={`user-${i}`} id="posts">
     {user.id}              
  </ul>
)))
  
  return (
    <div>
        {mapped()}
    </div>
  )  
};

export default Profile;