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

      window: Window
    }
    // this.renderPosts = this.renderPosts.bind(this); 
    // this.autoReloader = this.autoReloader.bind(this); 
  }
 
 
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchLikes();
    this.props.fetchUsers();
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
            <img src={facebookroundURL} className="logo" onClick={()=>scrollTo({top: 0, behavior: 'smooth'})}/>
            {/* <img src={searchURL} className="logo"/> */}
          </div>
          <div className="header2">
            <img src={homeURL} className="middle-header-icons" onClick={()=>scrollTo({top: 0, behavior: 'smooth'})}/>
            {/* <img src={videoURL} className="middle-header-icons"/> */}
            {/* <img src={marketURL} className="middle-header-icons"/> */}
            {/* <img src={friendsURL} className="middle-header-icons"/> */}
            {/* <img src={newsURL} className="middle-header-icons"/> */}
          </div>
          <div className="header3">
              <div className="right-nav-icon-name">
                <img src={this.props.currentUser.profile_photo || userURL} className="user-logo-header"/>
                <Link to={`/user/${this.props.currentUser.id}`}>
                    <h2 className="header-name">{this.props.currentUser.first_name}</h2>
                </Link>
              </div>
            {/* <img src={appsURL} className="logo"/>
            <img src={messagesURL} className="logo"/>
            <img src={bellURL} className="logo"/> */}
            <MenuDropdown className="show-menu-dropdown"/>
          </div>    
        </header>

        <div className="homepage-body">
          <div className="left-nav">
            <div className="left-nav-icon-row">
              <img src={this.props.currentUser.profile_photo || userURL} className="user-logo-leftnav"/>
              <Link to={`/user/${this.props.currentUser.id}`}>
                  <h2 className="leftnav-name">{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</h2>
              </Link>
            </div>
            <hr className="hline-lefnav"/>
            <div className="technologies-used-container">
              <h1 className="technologies-used-title">Technologies Used</h1>
              <ul className="technologies-used-ul">
                <div className="technologies-used-row">
                  <a href="https://www.ruby-lang.org/en/documentation/" target="_blank">
                    <img src={rubyonrailsURL} className="technologies-used-pic"/>
                  </a>
                  <a href="https://www.ruby-lang.org/en/documentation/" target="_blank">
                    <li className="technologies-used-li">Ruby on Rails</li>
                  </a>
                </div>
                <a href="https://reactjs.org/docs/getting-started.html" target="_blank">
                  <div className="technologies-used-row">
                      <img src={reactURL} className="technologies-used-pic"/>
                      <li className="technologies-used-li">React (+Hooks)</li>
                  </div>
                </a>
                <a href="https://redux.js.org/introduction/getting-started" target="_blank">
                  <div className="technologies-used-row">
                      <img src={reduxURL} className="technologies-used-pic"/>
                      <li className="technologies-used-li">Redux</li>
                  </div>
                </a>
                <a href="https://sass-lang.com/guide" target="_blank">
                  <div className="technologies-used-row">
                      <img src={sassURL} className="technologies-used-pic"/>
                      <li className="technologies-used-li">CSS/SASS (+Mixins)</li>
                  </div>
                </a>

              </ul>
            </div>

            <h1 className="bottom-wording-other-proj">Mike's Other Projects:</h1>
            <hr className="hline-bottom-lefnav"/>

            <a href="https://chord-pro-generator.herokuapp.com/#/" target="_blank" className="left-nav-bottom-icon-row2">
              <div className="left-nav-bottom-icon-row1">
                <img src={CPGsmallLogoURL} className="sites-logo1"/>
                {/* <h2 className="leftnav-name">Chord Pro Generator</h2> */}
              </div>
            </a>
            <a href="https://mordes89.github.io/EXPLODING-HOT-POTATO-SOCCER-/" target="_blank" className="left-nav-bottom-icon-row2">
              <div className="left-nav-bottom-icon-row2">
                <img src={EHPSLogoURL} className="sites-logo2"/>
                {/* <h2 className="leftnav-name">Exploding Hot-Potato Soccer!</h2> */}
              </div>
            </a>

            
          </div>
         
          <div className="right-nav">
            <h1 className="not-sponsored">Creator</h1>
            <span className="right-nav-icon-row">
              <img src={mikeSLogoURL} className="sponsored-logo-rightnav" alt="portfolio site" to="https://mordes89.github.io/Portfolio/"/>
              <a href="https://mordes89.github.io/Portfolio/" target="_blank">
                <div className="sponsored-wording-rightnav">
                  <h2 className="LinkedIn-rightnav">Profile Site</h2>
                  <h2 className="name-rightnav">Mike Schnall</h2> 
                </div>
              </a>
            </span>
            <span className="right-nav-icon-row">
              <img src={ghURL} className="sponsored-logo-rightnav"/>
              <a href="https://github.com/mordes89" target="_blank">
                {/* <div className="img-class">khdfifjfkbdfj</div> */}
                <div className="sponsored-wording-rightnav">
                  <h2 className="LinkedIn-rightnav">GitHub</h2>
                  <h2 className="name-rightnav">Mike Schnall</h2>
                </div>
              </a>
            </span>
            <span className="right-nav-icon-row">
              <img src={linkedinURL} className="sponsored-logo-rightnav"/>
              <a href="https://www.linkedin.com/in/mike-mordechai-schnall/" target="_blank" className="right-nav-icon-row">
                <div className="sponsored-wording-rightnav">
                  <h2 className="LinkedIn-rightnav">LinkedIn</h2>
                  <h2 className="name-rightnav">Mike Schnall</h2>
                </div>
              </a>
            </span>
            <span className="right-nav-icon-row">
              <img src={angelistURL} className="sponsored-logo-rightnav"/>
              <a href="https://angel.co/u/mike-schnall/" target="_blank" className="right-nav-icon-row">
                <div className="sponsored-wording-rightnav">
                  <h2 className="LinkedIn-rightnav">Angel List</h2>
                  <h2 className="name-rightnav">Mike Schnall</h2>
                </div>
              </a>
            </span>

            
            <hr className="hline-posts"/>
          </div>
        </div>


        <div className="middle-nav-newsfeed2">
            <div className="posting-box">
              <div className="posting-query">
                <img src={this.props.currentUser.profile_photo || userURL} className="post-user-pic"/>
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
                  <img src={smiley_colorURL} className="media-icons-post"/>
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