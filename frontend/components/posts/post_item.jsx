import React, {useState} from 'react';
import CommentForm from '../comments/comment_form_container';
import CommentMenuDropdown from '../homepage/comment_menu_dropdown_container';
import EditComment from '../comments/edit_comment_form_container';
import PostMenuDropdown from '../homepage/post_menu_dropdown_container';
import { Link } from 'react-router-dom';



// class PostItem extends React.Component {
const PostItem = (props) => {
  // const [post2, setPost2] = useState(props.post);

  // let likeOrUnlike2 = (post) => {
  //   if (Object.values(props.post.likes).length === 0){ 
  //     console.log("(post.likes).length === 0");
  //     return false
  //   } else {
  //     for (let i in props.likes) {
  //     console.log("(post.likes).length === 0");
  //       if (props.likes[i].liker_id === props.currentUser.id && props.likes[i].parent_post_id === props.post.id){
  //         console.log("(post.likes).length === 1");
  //         return true
  //       }         
  //     }
  //     console.log("(post.likes).length === false");
  //     return false
  //   }
  // }
  
  //defining likeOrUnlike:
  const [likeOrUnlike, setlikeOrUnlike] = useState(props.likeOrUnlike(props.post));
  const [comment_on, setComment_on] = useState(false);
  const [comment_can_be_on, setComment_can_be_on] = useState(true);
  
  

  let toggleComment = () => {
    setComment_on(!comment_on)
  }

  let settingLikeOrUnlike = () => {
    setlikeOrUnlike(!likeOrUnlike);
  }

  let handleLike = (post) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('like[parent_post_id]', props.post.id);
    formData.append('like[liker_id]', props.currentUser.id);    
    props.createLike(formData); 
   
    props.fetchPosts();
    settingLikeOrUnlike();
  }

  let handleUnlike = () => {
    let likes = props.likes    
    for (let i in likes) { 
      if (likes[i].parent_post_id === props.post.id && likes[i].liker_id === props.currentUser.id){
        props.deleteLike(props.likes[i].id)
      }
    } 
    props.fetchPosts();
    settingLikeOrUnlike();
  }

  
  return (
    <div>
      <div className="poster-and-time" id="id-poster-and-time">
        
          <Link to={`/user/${props.post.author.id}`}>
            <img src={props.users[props.post.author.id] ? (props.users[props.post.author.id].profile_photo || userURL) : userURL} className="profile-pic"/>              
          </Link>
          <div className="top-bar-of-post">
            <Link to={`/user/${props.post.author.id}`} >
              <div className="name-and-time">
                <li className="author">{`${props.post.author.first_name} ${props.post.author.last_name}`}</li>
                <li className="created_at">{                  
                  Math.floor((Date.now() - Date.parse(props.post.created_at))/ 60000) < 1 ? "Now" :
                    Math.floor((Date.now() - Date.parse(props.post.created_at))/ 60000) < 60 ? 
                    Math.floor((Date.now() - Date.parse(props.post.created_at))/ 60000)+"m" : 
                    (Math.floor((Date.now() - Date.parse(props.post.created_at))/ 3600000) < 23 ? 
                    Math.floor((Date.now() - Date.parse(props.post.created_at))/ 3600000)+"h" : 
                    Math.floor((Date.now() - Date.parse(props.post.created_at))/ 86400000)+"d" )                  
                  }
                </li>
              </div>
            </Link>
          </div>
        </div>
          {props.post.author.id === props.currentUser.id ?
          <div className="post-menu-icon-and-menu">
            <PostMenuDropdown 
              post={props.post}
              onChange={props.onChange}
            />
          </div> : null }
        <li className="post-body-homepage">{props.post.body}</li>
        <img src={props.post.photoUrl} className="post-pic-homepage"/>
        <div 
          className="num_likes"
          onClick={props.likeOrUnlike(props.post) ? () => handleUnlike() : () => handleLike(props.post)}
          >
          <img src={window.likeURL} className="like-comment-share-icons"/>
          <h1 className="like-comment-share-text">{props.num_likes}</h1>
        </div>
        <hr className="hline-posts"/>
        <div className="like-comment-share">
          {/* {console.log(post.likes)} */}
          {/* {console.log(Object.values(props.likes))} */}
          {/* Object.values(post.likes).includes(props.currentUser.id)  */}
          {/* {!this.state.like_on ?             */}
          {props.likeOrUnlike(props.post) ?            
          <div 
            className="media-links-like-comment"
            onClick={() => handleUnlike()} //find the like.id where post.id == parent_post and liker_id == currentUser.id
            >
            <img src={window.unlikePostURL} className="like-comment-share-icons"/>
            <h1 className="like-comment-share-text">Unlike</h1>
          </div> 
          :
          <div 
            className="media-links-like-comment"
            onClick={() => handleLike(props.post)}
            >
            <img src={window.likePostURL} className="like-comment-share-icons"/>
            <h1 className="like-comment-share-text">Like</h1>
          </div>                         
          }
          
          <div className="media-links-like-comment" onClick={comment_can_be_on ? toggleComment : null}>
            <img src={window.commentsURL} className="like-comment-share-icons"/>
            <h1 className="like-comment-share-text">Comment</h1>
          </div>              
        </div>
        <hr className="hline-posts"/> 


        {/* Comments: */}
        {true ? <CommentForm 
                    parent_post_id={props.post.id} 
                    comment_on2={comment_on}
                    toggleComment={toggleComment}
                /> : null}
        {Object.values(props.comments).reverse().map((comment, i) => (
          comment.parent_post_id === props.post.id ? 
          (<ul key={`comment-${i}`} className="comments">
            <div className="pic-comment-dropdown">
              <Link to={`/user/${comment.author_id}`}>
                <img src={props.users[comment.author_id] ? props.users[comment.author_id].profile_photo || userURL : userURL} className="profile-pic"/>
              </Link>
              <div className="top-bar-of-comment">
                <div className="name-and-time">
                  {<EditComment comment={comment} setComment_can_be_on={setComment_can_be_on}/>}
                  
                </div>
              </div>
                  {comment.edit ? null : <CommentMenuDropdown comment={comment} setComment_can_be_on={setComment_can_be_on}/>}                        
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
          </ul>) : null
        ))}
    </div>
  )
}

export default PostItem;