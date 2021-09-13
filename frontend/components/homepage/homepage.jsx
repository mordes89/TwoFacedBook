import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
import MenuDropdown from './menu_dropdown_container';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this)
    this.posts = this.props.fetchPosts();
    // this.users = this.props.entities.users[-1]
  }
  
  renderPosts() { 
    debugger
    return(
      <ul>
        {Object.values(this.props.posts).reverse().map((post, i) => (
          <ul key={`post-${i}`} className="posts">
            <div className="poster-and-time">
              <img src={window.userURL} className="profile-pic"/>
              <div className="name-and-time">
                <li className="author">{post.author_id}</li>
                <li className="created_at">{                  
                  Math.floor((Date.now() - Date.parse(post.created_at))/ 60000) < 60 ? 
                    Math.floor((Date.now() - Date.parse(post.created_at))/ 60000)+"m ago" : 
                      (Math.floor((Date.now() - Date.parse(post.created_at))/ 3600000) < 23 ? 
                        Math.floor((Date.now() - Date.parse(post.created_at))/ 3600000)+"h ago" : 
                          Math.floor((Date.now() - 1 - Date.parse(post.created_at))/ 60000) < 1 ? 
                            Math.floor((Date.now() - Date.parse(post.created_at))/ 86400000)+"d ago" : "Now")                  
                }
                </li>
              </div>
            </div>
            <li className="post-body-homepage">{post.body}</li>
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
            {/* <li className="created_at">{Date.now() - post.created_at}</li> */}
            {/* <li>{this.users}</li> */}
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
            <img src={window.searchURL} className="logo"/>
          </div>
          <div className="header2">
            <img src={window.homeURL} className="logo"/>
            <img src={window.videoURL} className="logo"/>
            <img src={window.marketURL} className="logo"/>
            <img src={window.friendsURL} className="logo"/>
            <img src={window.newsURL} className="logo"/>
          </div>
          <div className="header3">
            {/* <img src={window.appsURL} className="logo"/>
            <img src={window.messagesURL} className="logo"/>
            <img src={window.bellURL} className="logo"/> */}
            <MenuDropdown className="show-menu-dropdown"/>
          </div>    
        </header>

        <div className="homepage-body">
          <div className="left-nav">
            <img src={window.userURL} className="logo"/>
            <h2 className="header-name">{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</h2>
          </div>
         
          <div className="right-nav">
            <button onClick={() => this.props.openModal('post')} className="create_user-button">{`What's on your mind ${this.props.currentUser.first_name}?`}</button>    
            <ul>ihasdio</ul>
            <ul>ihasdio</ul>
            <ul>ihasdio</ul>
            <ul>ihasdio</ul>
            <ul>ihasdio</ul>
          </div>
        </div>






        <div className="middle-nav-newsfeed">
            <div className="posting-box">
              <div className="posting-query">
                <img src={window.userURL} className="logo"/>
                <input onClick={() => this.props.openModal('post')} className="create_post-input" value={`What's on your mind ${this.props.currentUser.first_name}?`}/>    
              </div>
              <hr className="hline-login"/>
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