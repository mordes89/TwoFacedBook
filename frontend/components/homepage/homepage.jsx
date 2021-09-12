import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal/modal';
import MenuDropdown from './menu_dropdown_container';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this)
  }
  renderPosts() { 
    // debugger
    return(
      <ul>
        {Object.values(this.props.posts).map((post, i) => (
          <li key={`post-${i}`}>
            <li>{post.body}</li>
            <li>{post.author_id}</li>
          </li>
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
            
            <div className="posting-query">
              <img src={window.userURL} className="logo"/>
              <input onClick={() => this.props.openModal('post')} className="create_post-input" placeholder={`What's on your mind ${this.props.currentUser.first_name}?`}/>    
            </div>

            <h1 className="posts">{this.renderPosts()}</h1>


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