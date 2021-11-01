import React from 'react';
// import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
import MenuDropdown from './menu_dropdown_container';
import PostMenuDropdown from './post_menu_dropdown_container';
import PostItem from '../posts/post_item_container.jsx';
import CommentForm from '../comments/comment_form_container';
import CommentMenuDropdown from './comment_menu_dropdown_container';
import EditComment from '../comments/edit_comment_form_container';



class Homepage extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      comment_on: false,
      like_on: true,
      PrevlikesAmt: this.props.likesAmtProp,
      likesAmt: this.props.likesAmtProp,
      likesInLocalState: this.props.likes,
      likeOrUnlikeState: false,
    }
    // this.renderPosts = this.renderPosts.bind(this);
    // this.toggleComment = this.toggleComment.bind(this);
    // this.handleLike = this.handleLike.bind(this);
    // this.handleUnlike = this.handleUnlike.bind(this);
    // this.likeOrUnlike = this.likeOrUnlike.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchLikes();
  }


   
  renderPosts() { 
    if (!this.props.posts){
      return null
    }    
    return(
      <ul className="entire-post">
        {Object.values(this.props.posts).reverse().map((post, i) => (
          <ul key={`post-${i}`} id="posts">
            {<PostItem 
              post={post}
              postId={post.id}
              num_likes={Object.values(post.likes).length}
              // comments={this.props.comments}
              // currentUser={this.props.currentUser} 
              // createLike={this.props.createLike} 
              // deleteLike={this.props.deleteLike}
              // fetchLikes={this.props.fetchLikes}
            />}   
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