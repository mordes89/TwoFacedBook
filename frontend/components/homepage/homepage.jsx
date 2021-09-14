import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
import MenuDropdown from './menu_dropdown_container';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this)
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
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
              <img src={window.userURL} className="profile-pic"/>
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
            {/* <hr className="hline-posts-top"/> */}
            <li className="post-body-homepage">{post.body}</li>
            <img src={post.photoUrl} className="post-pic-homepage"/>
            <hr className="hline-posts"/>
            <div className="like-comment-share">
              <div className="media-links">
                <img src={window.likeURL} className="like-comment-share-icons"/>
                <h1 className="like-comment-share-text">Like</h1>
              </div>
              <div className="media-links">
                <img src={window.commentsURL} className="like-comment-share-icons"/>
                <h1 className="like-comment-share-text">Comment</h1>
              </div>              
            </div>
            <hr className="hline-posts"/>
          </ul>
        ))}
      </ul>
    );
  }
  
  
  loggedIn () {
    window.posts = this.props.posts
    return(
      <div>
        <header className="header">
          <div className="header1">
            <img src={window.facebookroundURL} className="logo"/>
            {/* <img src={window.searchURL} className="logo"/> */}
          </div>
          <div className="header2">
            <img src={window.homeURL} className="middle-header-icons"/>
            <img src={window.videoURL} className="middle-header-icons"/>
            {/* <img src={window.marketURL} className="middle-header-icons"/> */}
            <img src={window.friendsURL} className="middle-header-icons"/>
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
              <h2 className="header-name">{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</h2>
            </div>
          </div>
         
          <div className="right-nav">
            <button onClick={() => this.props.openModal('post')} className="create_user-button">{`What's on your mind ${this.props.currentUser.first_name}?`}</button>    
          </div>
        </div>






        <div className="middle-nav-newsfeed">
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
                <div className="media-links">
                  <img src={window.video_colorURL} className="media-icons"/>
                  <h1 className="media-text">Video</h1>
                </div>
                <div className="media-links">
                  <img src={window.photo_colorURL} className="media-icons"/>
                  <h1 className="media-text">Photo</h1>
                </div>
                <div className="media-links">
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