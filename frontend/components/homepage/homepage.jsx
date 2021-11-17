import React from 'react';
// import Modal from './modal/modal';
import MenuDropdown from './menu_dropdown_container';
import PostMenuDropdown from './post_menu_dropdown_container';
import PostItem from '../posts/post_item_container.jsx';
import RenderPost from '../posts/render_posts_container.jsx';
import CommentForm from '../comments/comment_form_container';
import CommentMenuDropdown from './comment_menu_dropdown_container';
import EditComment from '../comments/edit_comment_form_container';
import { Link } from 'react-router-dom';



class Homepage extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      fetched: false,
      posts: this.props.posts,
      prevPsotsLength: 0,
      comment_on: false,
      like_on: true,
      PrevlikesAmt: this.props.likesAmtProp,
      likesAmt: this.props.likesAmtProp,
      likesInLocalState: this.props.likes,
      likeOrUnlikeState: false,
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

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.fetched === false) { 
  //     this.props.fetchPosts();
  //     this.setState({fetched: true})
  //     console.log("hit cdm");
  //     // this.state.prevPsotsLength = Object.values(this.props.posts).length;
  //   }
  // }



//refactored to it's pwn render_posts file
  // renderPosts() {    
     
  //   if (!this.props.posts){
  //     return null
  //   }    
    
  //   return(
  //     <ul className="entire-post">
  //       {Object.values(this.props.posts).reverse().map((post, i) => (
  //         <ul key={`post-${i}`} id="posts">
  //           {<PostItem 
  //             post={post}
  //             postId={post.id}
  //             num_likes={(typeof post.likes !== 'undefined') ? Object.keys(post.likes).length : 0}
  //           />}   
  //         </ul>
  //       ))}
  //     </ul>
  //   );
  // }
  
  
  loggedIn () {
    return(
      <div>
        <header className="header">
          <div className="header1">
            <img src={facebookroundURL} className="logo" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}/>
            {/* <img src={window.searchURL} className="logo"/> */}
          </div>
          <div className="header2">
            <img src={homeURL} className="middle-header-icons" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}/>
            {/* <img src={window.videoURL} className="middle-header-icons"/> */}
            {/* <img src={window.marketURL} className="middle-header-icons"/> */}
            {/* <img src={window.friendsURL} className="middle-header-icons"/> */}
            {/* <img src={window.newsURL} className="middle-header-icons"/> */}
          </div>
          <div className="header3">
            <Link to={`/user/${this.props.currentUser.id}`}>
              <div className="right-nav-icon-name">
                <img src={userURL} className="user-logo-header"/>
                <h2 className="header-name">{this.props.currentUser.first_name}</h2>
              </div>
            </Link>
            {/* <img src={window.appsURL} className="logo"/>
            <img src={window.messagesURL} className="logo"/>
            <img src={window.bellURL} className="logo"/> */}
            <MenuDropdown className="show-menu-dropdown"/>
          </div>    
        </header>

        <div className="homepage-body">
          <div className="left-nav">
          <Link to={`/user/${this.props.currentUser.id}`}>
              <div className="left-nav-icon-row">
                <img src={userURL} className="user-logo-leftnav"/>
                <h2 className="leftnav-name">{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</h2>
              </div>
            </Link>
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
                <img src={userURL} className="post-user-pic"/>
                <input 
                  onClick={() => this.props.openModal('post')} 
                  className="create_post-input" 
                  placeholder={`What's on your mind ${this.props.currentUser.first_name}?`}                  
                />    
              </div>
              <hr className="hline-posts"/>
              <div className="add-media-to-post">
                <div 
                  className="media-links-post"
                  onClick={() => this.props.openModal('post')}
                >
                  <img src={video_colorURL} className="media-icons-post"/>
                  <h1 className="media-text-post">Video</h1>
                </div>
                <div 
                  className="media-links-post"
                  onClick={() => this.props.openModal('post')}
                >
                  <img src={photo_colorURL} className="media-icons-post"/>
                  <h1 className="media-text-post">Photo</h1>
                </div>
                <div 
                  className="media-links-post"
                  onClick={() => this.props.openModal('post')}
                >
                  <img src={window.smiley_colorURL} className="media-icons-post"/>
                  <h1 className="media-text-post">Feeling</h1>
                </div>
              </div>
              <RenderPost posts={this.props.posts} fetched={this.state.fetched}/>
              {/* <h1>{this.renderPosts()}</h1> */}
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