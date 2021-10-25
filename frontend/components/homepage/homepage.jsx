import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
import MenuDropdown from './menu_dropdown_container';
import PostMenuDropdown from './post_menu_dropdown_container';
import CommentForm from '../comments/comment_form_container';
import CommentMenuDropdown from './comment_menu_dropdown_container';
import EditComment from '../comments/edit_comment_form_container';



class Homepage extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      comment_on: false
    }
    this.renderPosts = this.renderPosts.bind(this);
    this.toggleComment = this.toggleComment.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.likeOrUnlike = this.likeOrUnlike.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchLikes();
  }

  toggleComment() {
    let toggleCom = !this.state.comment_on;
    this.setState({comment_on: toggleCom})
  }

  handleLike(postId){
    // e.preventDefault();
    const formData = new FormData();
    formData.append('like[parent_post_id]', postId);
    formData.append('like[liker_id]', this.props.currentUser.id);    
    this.props.createLike(formData); 
    // console.log(postId);
  }

  handleUnlike(likeId){
    this.props.deleteLike(likeId); 
  }

  likeOrUnlike(likes, postId){
    if (likes.length === 0){ 
      return false
    }
    let liked = false
    for (let i in likes) {
      // Object.values(el).includes(this.props.currentUser.id) ? liked = true : null  
      // console.log(likes[i].liker_id) 
      if (likes[i].liker_id === this.props.currentUser.id){
        liked = true
      }   
    }
    return liked
  }
   
  renderPosts() { 
    if (!this.props.posts){
      return null
    }    
    return(
      <ul className="entire-post">
        {Object.values(this.props.posts).reverse().map((post, i) => (
          <ul key={`post-${i}`} className="posts">
            <div className="poster-and-time">
              <img src={userURL} className="profile-pic"/>
              <div className="top-bar-of-post">
                <div className="name-and-time">
                  <li className="author">{`${post.author.first_name} ${post.author.last_name}`}</li>
                  <li className="created_at">{                  
                    Math.floor((Date.now() - Date.parse(post.created_at))/ 60000) < 1 ? "Now" :
                      Math.floor((Date.now() - Date.parse(post.created_at))/ 60000) < 60 ? 
                        Math.floor((Date.now() - Date.parse(post.created_at))/ 60000)+"m" : 
                          (Math.floor((Date.now() - Date.parse(post.created_at))/ 3600000) < 23 ? 
                            Math.floor((Date.now() - Date.parse(post.created_at))/ 3600000)+"h" : 
                                Math.floor((Date.now() - Date.parse(post.created_at))/ 86400000)+"d" )                  
                  }
                  </li>
                </div>
              </div>
            </div>
              <div className="post-menu-icon-and-menu">
                <PostMenuDropdown post={post}/>
              </div>
            {/* <hr className="hline-posts-top"/> */}
            <li className="post-body-homepage">{post.body}</li>
            <img src={post.photoUrl} className="post-pic-homepage"/>
            <div 
              className="media-links"
              // onClick={() => this.handleLike(post.id)}
              >
              <img src={likeURL} className="like-comment-share-icons"/>
              <h1 className="like-comment-share-text">{post.likes.length}</h1>
            </div>
            <hr className="hline-posts"/>
            <div className="like-comment-share">
              {/* {console.log(post.likes)} */}
              {/* {console.log(Object.values(this.props.likes))} */}
              {/* Object.values(post.likes).includes(this.props.currentUser.id)  */}
              {this.likeOrUnlike(post.likes, post.id) ?  
              <div 
                className="media-links"
                onClick={() => this.handleUnlike(like.id)} //find the like.id where post.id == parent_post and liker_id == currentUser.id
                >
                <img src={likeURL} className="like-comment-share-icons"/>
                <h1 className="like-comment-share-text">Unlike</h1>
              </div> 
              :
              <div 
                className="media-links"
                onClick={() => this.handleLike(post.id)}
                >
                <img src={likeURL} className="like-comment-share-icons"/>
                <h1 className="like-comment-share-text">Like</h1>
              </div>                         
              }
              
              <div className="media-links" onClick={this.toggleComment}>
                <img src={commentsURL} className="like-comment-share-icons"/>
                <h1 className="like-comment-share-text">Comment</h1>
              </div>              
            </div>
            <hr className="hline-posts"/>
            {this.state.comment_on ? <CommentForm parent_post_id={post.id} comment_on={this.state.comment_on}/> : null}


            {Object.values(this.props.comments).reverse().map((comment, i) => (
              comment.parent_post_id === post.id ? 
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
          
          </ul>
        ))}
      </ul>
    );
  }
  
  
  loggedIn () {
    return(
      <div>
        <header className="header">
          <div className="header1">
            <img src={window.facebookroundURL} className="logo"/>
            {/* <img src={window.searchURL} className="logo"/> */}
          </div>
          <div className="header2">
            <img src={window.homeURL} className="middle-header-icons"/>
            {/* <img src={window.videoURL} className="middle-header-icons"/> */}
            {/* <img src={window.marketURL} className="middle-header-icons"/> */}
            {/* <img src={window.friendsURL} className="middle-header-icons"/> */}
            {/* <img src={window.newsURL} className="middle-header-icons"/> */}
          </div>
          <div className="header3">
            <div className="right-nav-icon-name">
              <img src={window.userURL} className="user-logo-header"/>
              <h2 className="header-name">{this.props.currentUser.first_name}</h2>
            </div>
            {/* <img src={window.appsURL} className="logo"/>
            <img src={window.messagesURL} className="logo"/>
            <img src={window.bellURL} className="logo"/> */}
            <MenuDropdown className="show-menu-dropdown"/>
          </div>    
        </header>

        <div className="homepage-body">
          <div className="left-nav">
            <div className="left-nav-icon-row">
              <img src={window.userURL} className="user-logo-leftnav"/>
              <h2 className="leftnav-name">{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</h2>
            </div>
          </div>
         
          <div className="right-nav">
            <h1 className="not-sponsored">Creator</h1>
            <a href="https://www.linkedin.com/in/mike-mordechai-schnall/" target="_blank" className="right-nav-icon-row">
              <img src={linkedinURL} className="sponsored-logo-rightnav"/>
              <div className="sponsored-wording-rightnav">
                <h2 className="LinkedIn-rightnav">LinkedIn</h2>
                <h2 className="name-rightnav">Mike Schnall</h2>
              </div>
            </a>
            <a href="https://github.com/mordes89" target="_blank" className="right-nav-icon-row">
              <img src={ghURL} className="sponsored-logo-rightnav"/>
              <div className="sponsored-wording-rightnav">
                <h2 className="LinkedIn-rightnav">GitHub</h2>
                <h2 className="name-rightnav">Mike Schnall</h2>
              </div>
            </a>
            <hr className="hline-posts"/>
          </div>
        </div>


        <div className="middle-nav-newsfeed2">
            <div className="posting-box">
              <div className="posting-query">
                <img src={window.userURL} className="post-user-pic"/>
                <input 
                  onClick={() => this.props.openModal('post')} 
                  className="create_post-input" 
                  placeholder={`What's on your mind ${this.props.currentUser.first_name}?`}                  
                />    
              </div>
              <hr className="hline-posts"/>
              <div className="add-media-to-post">
                <div 
                  className="media-links"
                  onClick={() => this.props.openModal('post')}
                >
                  <img src={window.video_colorURL} className="media-icons"/>
                  <h1 className="media-text">Video</h1>
                </div>
                <div 
                  className="media-links"
                  onClick={() => this.props.openModal('post')}
                >
                  <img src={window.photo_colorURL} className="media-icons"/>
                  <h1 className="media-text">Photo</h1>
                </div>
                <div 
                  className="media-links"
                  onClick={() => this.props.openModal('post')}
                >
                  <img src={window.smiley_colorURL} className="media-icons"/>
                  <h1 className="media-text">Feeling</h1>
                </div>
              </div>
              <h1>{this.renderPosts()}</h1>
            </div>


          </div>
      </div>
    )
  };
  
  render() {    
    return (
      <div>
        {this.props.currentUser ? this.loggedIn() : null} 
      </div>
    )
  } 
};

export default Homepage;