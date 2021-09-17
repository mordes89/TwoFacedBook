import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.currentUser.id,
      photoUrl: null,
      photoFile: null,
      parent_post_id: this.props.parent_post_id,
      num_likes: 0,

      comment_on: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchUsers();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    // e.preventDefault();
    const formData = new FormData();
    formData.append('comment[body]', this.state.body);
    formData.append('comment[author_id]', this.state.author_id);
    formData.append('comment[parent_post_id]', this.state.parent_post_id);
    formData.append('comment[num_likes]', this.state.num_likes);
    if (this.state.photoFile) {  
      formData.append('comment[photo]', this.state.photoFile);
    }   
    this.props.processForm(formData);
  }  

  handleFile(e){
    // this.setState({photoUrl: e.currentTarget.files[0]}); 
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => this.setState({ photoUrl: reader.result, photoFile: file });
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }   
  }

  renderComments() { 
    if (!this.props.comments){
      return null
    }
    debugger
    return(
      <ul className="entire-post">
        {Object.values(this.props.comments).reverse().map((comment, i) => (
          <ul key={`comment-${i}`} className="posts">
            <div className="poster-and-time">
              <img src={userURL} className="profile-pic"/>
              <div className="top-bar-of-post">
                <div className="name-and-time">
                  <li className="author">{`${comment.author.first_name} ${comment.author.last_name}`}</li>
                  <li className="created_at">{                  
                    Math.floor((Date.now() - Date.parse(comment.created_at))/ 60000) < 1 ? "Now" :
                      Math.floor((Date.now() - Date.parse(comment.created_at))/ 60000) < 60 ? 
                        Math.floor((Date.now() - Date.parse(comment.created_at))/ 60000)+"m" : 
                          (Math.floor((Date.now() - Date.parse(comment.created_at))/ 3600000) < 23 ? 
                            Math.floor((Date.now() - Date.parse(comment.created_at))/ 3600000)+"h" : 
                                Math.floor((Date.now() - Date.parse(comment.created_at))/ 86400000)+"d" )                  
                  }
                  </li>
                </div>
              </div>
            </div>
                <div className="post-menu-icon-and-menu">
                  {/* <PostMenuDropdown comment={comment}/> */}
              </div>
            {/* <hr className="hline-posts-top"/> */}
            <li className="post-body-homepage">{comment.body}</li>
            <img src={comment.photoUrl} className="post-pic-homepage"/>
            <hr className="hline-posts"/>
            <div className="like-comment-share">
              {/* <div className="media-links">
                <img src={likeURL} className="like-comment-share-icons"/>
                <h1 className="like-comment-share-text">Like</h1>
              </div> */}
              <div className="media-links">
                <img src={commentsURL} className="like-comment-share-icons"/>
                <h1 className="like-comment-share-text">Comment</h1>
              </div>              
            </div>
            <hr className="hline-posts"/>
            <CommentForm parent_comment_id={comment.id}/>
          </ul>
        ))}
      </ul>
    );
  }








  
  render() {
  const comment = this.state.comment_on ? 
        <form className="posting-query" onSubmit={() => this.handleSubmit()}>
            <img src={window.userURL} className="post-user-pic"/>
            <input 
              onChange={this.update('body')}     
              className="create_post-input" 
              placeholder="Write a comment..."                  
            />     
            <button className="hidden-input-pic">submit</button>
        </form> : null
    // const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="pic-preview"/> : null;

    return (
      <div>
        {comment}
        {/* {this.renderComments()} */}
      </div>
   );
  }
}

export default CommentForm;