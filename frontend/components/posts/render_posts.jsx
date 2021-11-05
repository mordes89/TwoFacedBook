import React from 'react';
// import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
// import MenuDropdown from './menu_dropdown_container';
// import PostMenuDropdown from './post_menu_dropdown_container';
import PostItem from '../posts/post_item_container.jsx';
// import CommentForm from '../comments/comment_form_container';
// import CommentMenuDropdown from './comment_menu_dropdown_container';
// import EditComment from '../comments/edit_comment_form_container';



class RenderPost extends React.Component {
   constructor(props) {
      super(props);    
      this.state = {
      //   fetched: false,
        posts: this.props.posts,
      //   prevPsotsLength: 0,
      //   comment_on: false,
      //   like_on: true,
      //   PrevlikesAmt: this.props.likesAmtProp,
      //   likesAmt: this.props.likesAmtProp,
      //   likesInLocalState: this.props.likes,
      //   likeOrUnlikeState: false,         
      }
      // this.renderPosts = this.renderPosts.bind(this); 
      // this.autoReloader = this.autoReloader.bind(this); 
   }

   componentDidMount() {
      this.props.fetchUsers();
      this.props.fetchPosts();
      this.props.fetchComments();
      this.props.fetchLikes();      
   }

   render() {      
      // if (!this.props.posts){
      // return null
      // }    
      return(
         <ul className="entire-post">            
            {(Object.values(this.props.posts).reverse().map((post, i) => (
                  <ul key={`post-${i}`} id="posts">
                     {<PostItem key={`post-${i}`} id="posts"
                        fetched={this.props.fetched}
                        posts={this.props.posts}
                        post={post}
                        postId={post.id}
                        num_likes={(typeof post.likes !== 'undefined') ? Object.keys(post.likes).length : 0}
                     />
                     }   
                  </ul>
               )))}
         </ul>

      );
   }
}

export default RenderPost;
