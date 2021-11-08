import React, {useState} from 'react';
import CommentForm from '../comments/comment_form_container';
import CommentMenuDropdown from '../homepage/comment_menu_dropdown_container';
import EditComment from '../comments/edit_comment_form_container';
import PostMenuDropdown from '../homepage/post_menu_dropdown_container';


// class PostItem extends React.Component {
const PostItem = (props) => {
  const [post, setPost] = useState(props.post);

  let likeOrUnlike2 = (post) => {
    if (Object.values(post.likes).length === 0){ 
      console.log("(post.likes).length === 0");
      return false
    } else {
      for (let i in props.likes) {
        if (props.likes[i].liker_id === props.currentUser.id && props.likes[i].parent_post_id === post.id){
          console.log("(post.likes).length === 1");
          return true
        }         
      }
      console.log("(post.likes).length === false");
      return false
    }
  }
  
  //defining likeOrUnlike:
  const [likeOrUnlike, setlikeOrUnlike] = useState(props.likeOrUnlike(props.post));
  const [comment_on, setComment_on] = useState(false);

  

  let toggleComment = () => {
    setComment_on(!comment_on)
    console.log("toggleComment needs logic");
  }

  let handleLike = (post) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append('like[parent_post_id]', post.id);
    formData.append('like[liker_id]', props.currentUser.id);    
    props.createLike(formData); 
   
    props.fetchPosts();
    setlikeOrUnlike(!likeOrUnlike);
  }

  let handleUnlike = () => {
    let likes = props.likes    
    for (let i in likes) { 
      if (likes[i].parent_post_id === post.id && likes[i].liker_id === props.currentUser.id){
        props.deleteLike(props.likes[i].id)
      }
    } 
    props.fetchPosts();
    setlikeOrUnlike(!likeOrUnlike);
  }

  
  return (
    <div>
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
            <PostMenuDropdown 
              post={post}
            />
          </div>
        <li className="post-body-homepage">{post.body}</li>
        <img src={post.photoUrl} className="post-pic-homepage"/>
        <div 
          className="media-links"
          onClick={() => handleLike(post)}
          >
          <img src={likeURL} className="like-comment-share-icons"/>
          <h1 className="like-comment-share-text">{props.num_likes}</h1>
        </div>
        <hr className="hline-posts"/>
        <div className="like-comment-share">
          {/* {console.log(post.likes)} */}
          {/* {console.log(Object.values(props.likes))} */}
          {/* Object.values(post.likes).includes(props.currentUser.id)  */}
          {/* {!this.state.like_on ?             */}
          {likeOrUnlike ?            
          <div 
            className="media-links"
            onClick={() => handleUnlike()} //find the like.id where post.id == parent_post and liker_id == currentUser.id
            >
            <img src={unlikePostURL} className="like-comment-share-icons"/>
            <h1 className="like-comment-share-text">Unlike</h1>
          </div> 
          :
          <div 
            className="media-links"
            onClick={() => handleLike(post)}
            >
            <img src={likePostURL} className="like-comment-share-icons"/>
            <h1 className="like-comment-share-text">Like</h1>
          </div>                         
          }
          
          <div className="media-links" onClick={toggleComment}>
            <img src={commentsURL} className="like-comment-share-icons"/>
            <h1 className="like-comment-share-text">Comment</h1>
          </div>              
        </div>
        <hr className="hline-posts"/> 


        {/* Comments: */}
        {true ? <CommentForm 
                    parent_post_id={post.id} 
                    comment_on2={comment_on}
                    toggleComment={toggleComment}
                /> : null}
        {Object.values(props.comments).reverse().map((comment, i) => (
          comment.parent_post_id === post.id ? 
          (<ul key={`comment-${i}`} className="comments">
            <div className="pic-comment-dropdown">
              <img src={userURL} className="profile-pic"/>
              <div className="top-bar-of-comment">
                <div className="name-and-time">
                  {<EditComment comment={comment}/>}
                  
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
          </ul>) : null
        ))}
    </div>
  )
}

export default PostItem;