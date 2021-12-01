import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
// import MenuDropdown from './menu_dropdown_container';
// import PostMenuDropdown from './post_menu_dropdown_container';
import PostItem from '../posts/post_item_container.jsx';
// import CommentForm from '../comments/comment_form_container';
// import CommentMenuDropdown from './comment_menu_dropdown_container';
// import EditComment from '../comments/edit_comment_form_container';
import { fetchPosts, updatePost, deletePost} from '../../actions/post_actions';


const RenderPost = (state) => {
   let [posts, setPosts] = useState(state.posts);
   // const [likes, setLikes] = useState(state.likes);

   let onChange = () => {
      fetchPosts();
      () => setPosts(state.posts);
   }

   useEffect(
      () => {
         () => fetchPosts()         
         setPosts(state.posts)
         return () => setPosts(state.posts)
      }, [state.posts]
   )

   let likeOrUnlike = (post) => {
      if (Object.values(post.likes).length === 0){ 
         // console.log("render (post.likes).length === 0");
        return false
      } else {
        for (let i in post.likes) {
          if (post.likes[i].liker_id === state.currentUser.id){
            return true
          }         
        }
        return false
      }
   }

   let mapped = () => (Object.values(posts).reverse().map((post, i) => (
      <ul key={`post-${i}`} id="posts">
         {/* {post.body} */}
         {<PostItem 
            onChange={onChange}
            likeOrUnlike={likeOrUnlike}                        
            posts={state.posts}
            post={post}
            postId={post.id}
            num_likes={(typeof post.likes !== 'undefined') ? Object.keys(post.likes).length : 0}
         />}           
      </ul>
   )))

   return (
      <ul className="entire-post"> 
        {mapped()}
      </ul>
   )
} 



// class RenderPost extends React.Component {
//    constructor(props) {
//       super(props);    
//       this.state = {
//       //   fetched: false,
//         posts: this.props.posts,
//       //   prevPsotsLength: 0,
//       //   comment_on: false,
//       //   like_on: true,
//       //   PrevlikesAmt: this.props.likesAmtProp,
//       //   likesAmt: this.props.likesAmtProp,
//       //   likesInLocalState: this.props.likes,
//       //   likeOrUnlikeState: false,         
//       }
//       // this.renderPosts = this.renderPosts.bind(this); 
//       // this.autoReloader = this.autoReloader.bind(this); 
//    }

//    componentDidMount() {
//       this.props.fetchUsers();
//       this.props.fetchPosts();
//       this.props.fetchComments();
//       this.props.fetchLikes();      
//    }

//    render() {      
//       // if (!this.props.posts){
//       // return null
//       // }    
//       return(
//          <ul className="entire-post">            
//             {(Object.values(this.props.posts).reverse().map((post, i) => (
//                   <ul key={`post-${i}`} id="posts">
//                      {<PostItem key={`post-${i}`} id="posts"
//                         fetched={this.props.fetched}
//                         posts={this.props.posts}
//                         post={post}
//                         postId={post.id}
//                         num_likes={(typeof post.likes !== 'undefined') ? Object.keys(post.likes).length : 0}
//                      />
//                      }   
//                   </ul>
//                )))}
//          </ul>

//       );
//    }
// }

export default RenderPost;
