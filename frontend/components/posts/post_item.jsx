import React from 'react';

class PostItem extends React.Component {
   constructor(props) {
     super(props);    
     this.state = {
      post: this.props.post,
      
      comment_on: false,
      like_on: true,
      PrevlikesAmt: this.props.likesAmtProp,
      likesAmt: this.props.likesAmtProp,
      likesInLocalState: this.props.likes,
      likeOrUnlikeState: false,
     }
   }

  //  componentDidMount() {
  //   this.props.fetchUsers();
  //   this.props.fetchPosts();
  //   this.props.fetchComments();
  //   this.props.fetchLikes();
  // }






   render() {    
      return (
        <div>
           {this.state.post.body}
        </div>
      )
    } 
}

export default PostItem;