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

      edit: false
    };

    this.nullValue = '';

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    // this.props.fetchComments();
    // this.props.fetchUsers();
  }

  update(field, value='') {
    return e => this.setState({ [field]: e.target.value });
  } 

  handleSubmit(e) {
    e.preventDefault();
    // this.props.fetchPosts();
    const formData = new FormData();
    formData.append('comment[body]', this.state.body);
    formData.append('comment[author_id]', this.state.author_id);
    formData.append('comment[parent_post_id]', this.props.parent_post_id);
    formData.append('comment[num_likes]', this.state.num_likes);
    formData.append('comment[edit]', false);
    if (this.state.photoFile) {  
      formData.append('comment[photo]', this.state.photoFile);
    }   
    this.props.processForm(formData);    
    this.props.toggleComment();
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
  
  render() {    
  const comment = this.props.comment_on2 ? 
        <form className="posting-query" onSubmit={(e) => this.handleSubmit(e)}>
            <img src={this.props.currentUser.profile_photo || window.userURL} className="post-user-pic"/>
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
      </div>
   );
  }
}

export default CommentForm;