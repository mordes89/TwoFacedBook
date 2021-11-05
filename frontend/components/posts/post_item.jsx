import React from 'react';
import CommentForm from '../comments/comment_form_container';
import CommentMenuDropdown from '../homepage/comment_menu_dropdown_container';
import EditComment from '../comments/edit_comment_form_container';
import PostMenuDropdown from '../homepage/post_menu_dropdown_container';


class PostItem extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
    one: 0,
    post: this.props.posts[this.props.postId],
    posts: this.props.posts,
    likes: this.props.post.likes,
    num_likes: this.props.num_likes,
    
    comment_on: false,
    like_on: '',
    PrevlikesAmt: this.props.likesAmtProp,
    likesAmt: this.props.likesAmtProp,
    likesInLocalState: this.props.likes,
    likeOrUnlikeState: false,
  }

  // this.renderPosts = this.renderPosts.bind(this);
    this.toggleComment = this.toggleComment.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.likeOrUnlike = this.likeOrUnlike.bind(this);
  }

  componentDidMount() {
    this.likeOrUnlike();
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (this.state.one != 0) {
  //     this.props.fetchLikes();
  //     console.log("one: ", this.state.one); 
  //     this.setState({one: this.state.one - 1}) 
  //     console.log("one: ", this.state.one); 
  //   }
  // }


  toggleComment() {
    let toggleCom = !this.state.comment_on;
    this.setState({comment_on: toggleCom})
  }

  handleLike(postId){
    // e.preventDefault();
    this.setState({one: 10}) 
    
    const formData = new FormData();
    formData.append('like[parent_post_id]', postId);
    formData.append('like[liker_id]', this.props.currentUser.id);    
    this.props.createLike(formData); 
    this.setState({like_on: false})
    this.props.fetchLikes();      
    this.setState({num_likes: this.state.num_likes + 1})

  }

  handleUnlike(){    
    for (let i in this.props.likes) { 
      if (this.props.likes[i].parent_post_id == this.props.post.id && this.props.likes[i].liker_id === this.props.currentUser.id){
        this.setState({like_on: true})
        this.props.deleteLike(this.props.likes[i].id)
        this.setState({num_likes: this.state.num_likes - 1})
      }
    } 
    this.props.fetchLikes();
  }

  likeOrUnlike(){
    if (Object.values(this.props.post.likes).length === 0){ 
      this.setState({like_on: true})
    } else {
      this.setState({like_on: true})
      for (let i in this.state.post.likes) {
        if (this.props.post.likes[i].liker_id === this.props.currentUser.id){
          this.setState({like_on: false})
        }         
      }
    }
  }

  render() {    
    return (
      <div>
        <div className="poster-and-time">
            <img src={userURL} className="profile-pic"/>              
            <div className="top-bar-of-post">
              <div className="name-and-time">
                <li className="author">{`${this.state.post.author.first_name} ${this.state.post.author.last_name}`}</li>
                <li className="created_at">{                  
                  Math.floor((Date.now() - Date.parse(this.state.post.created_at))/ 60000) < 1 ? "Now" :
                    Math.floor((Date.now() - Date.parse(this.state.post.created_at))/ 60000) < 60 ? 
                    Math.floor((Date.now() - Date.parse(this.state.post.created_at))/ 60000)+"m" : 
                    (Math.floor((Date.now() - Date.parse(this.state.post.created_at))/ 3600000) < 23 ? 
                    Math.floor((Date.now() - Date.parse(this.state.post.created_at))/ 3600000)+"h" : 
                    Math.floor((Date.now() - Date.parse(this.state.post.created_at))/ 86400000)+"d" )                  
                  }
                </li>
              </div>
            </div>
          </div>
            <div className="post-menu-icon-and-menu">
              <PostMenuDropdown 
                post={this.state.post}
                reloader={this.props.reloader}
              />
            </div>
          <li className="post-body-homepage">{this.state.post.body}</li>
          <img src={this.state.post.photoUrl} className="post-pic-homepage"/>
          <div 
            className="media-links"
            // onClick={() => this.handleLike(this.state.post.id)}
            >
            <img src={likeURL} className="like-comment-share-icons"/>
            <h1 className="like-comment-share-text">{this.state.num_likes}</h1>
          </div>
          <hr className="hline-posts"/>
          <div className="like-comment-share">
            {/* {console.log(this.state.post.likes)} */}
            {/* {console.log(Object.values(this.props.likes))} */}
            {/* Object.values(this.state.post.likes).includes(this.props.currentUser.id)  */}
            {!this.state.like_on ?            
            <div 
              className="media-links"
              onClick={() => this.handleUnlike()} //find the like.id where post.id == parent_post and liker_id == currentUser.id
              >
              <img src={unlikePostURL} className="like-comment-share-icons"/>
              <h1 className="like-comment-share-text">Unlike</h1>
            </div> 
            :
            <div 
              className="media-links"
              onClick={() => this.handleLike(this.props.post.id)}
              >
              <img src={likePostURL} className="like-comment-share-icons"/>
              <h1 className="like-comment-share-text">Like</h1>
            </div>                         
            }
            
            <div className="media-links" onClick={this.toggleComment}>
              <img src={commentsURL} className="like-comment-share-icons"/>
              <h1 className="like-comment-share-text">Comment</h1>
            </div>              
          </div>
          <hr className="hline-posts"/>
          {this.state.comment_on ? <CommentForm parent_post_id={this.state.post.id} comment_on={this.state.comment_on}/> : null}


          {Object.values(this.props.comments).reverse().map((comment, i) => (
            comment.parent_post_id === this.state.post.id ? 
            (<ul key={`comment-${i}`} className="comments">
              <div className="pic-comment-dropdown">
                <img src={userURL} className="profile-pic"/>
                <div className="top-bar-of-comment">
                  <div className="name-and-time">
                    {<EditComment comment={comment}/>}
                    {/* <div className="comment-name-and-body">
                      <li className="comment-author">{`${this.props.users[comment.author_id].first_name} ${this.props.users[comment.author_id].last_name}`}</li>
                      <li className="comment-body-homepage">{comment.body}</li>
                      <img src={comment.photoUrl} className="comment-pic-homepage"/>
                    </div> */}
                  </div>
                </div>
                    {comment.edit ? null : <CommentMenuDropdown comment={comment}/>}                        
              </div>
              <li className="created-at-comment">{                  
                Math.floor((Date.now() - Date.parse(comment.created_at))/ 60000) < 1 ? "Now" :
                  Math.floor((Date.now() - Date.parse(comment.created_at))/ 60000) < 60 ? 
                    Math.floor((Date.now() - Date.parse(comment.created_at))/ 60000)+"m" : 
                      (Math.floor((Date.now() - Date.parse(comment.created_at))/ 3600000) < 23 ? 
                        Math.floor((Date.now() - Date.parse(comment.created_at))/ 3600000)+"h" : 
                            Math.floor((Date.now() - Date.parse(comment.created_at))/ 86400000)+"d" )                  
              }
              </li>
                {/* <div className="comment-menu-icon-and-menu">
                  <commentMenuDropdown comment={comment}/>
                </div> */}
              {/* <hr className="hline-comments-top"/> */}
              {/* {console.log(comment)} */}
              
            </ul>) : null
          ))}
      </div>
    )
  } 
}

export default PostItem;