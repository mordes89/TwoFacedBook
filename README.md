<center>
  <img align="center" width="180" height="180" src="app/assets/images/facebookround.png">
</center>
<br></br>

# [TwoFacedBook](https://twofacedbook.herokuapp.com/#/login)


## TwoFacedBook is a clone of Facebook. The site currently gives the user the ability to log in as a demo-user or create a new account, write, edit, and delete posts on the wall. The ability to edit or delete posts is only available to the user who created said post. Users can add pictures to posts as well.   

<br></br>
# Build
## Twofacedbook was built with  *ruby '2.7.3' and Rails* backend and *React/Redux* front-end.
## *AWS* implementation for image uploads

<br></br>
# Twofacedbook gives users the ability to:
* Create a new unique user
* Create posts on the wall
* Edit posts they created
* Delete own posts
* Add photos to posts  

<br></br>
# Instructions
* Follow [this](https://twofacedbook.herokuapp.com/#/login) link to the website splash page
* Either create a new user or log in with the demo-user button.
* Add a post  
* Edit it (in thedropdown menu on your post)
* Delete it (if you'd like)
  
<br></br>
# Code
*The code below is the container for the homepage. This connects the state's functionality for use on the visual-component Homepage
  
```
const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    navLink: <Link to="/post"/>,
    posts: state.entities.posts,
    users: state.users,
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  fetchPosts: () => dispatch(fetchPosts()), 
  fetchUsers: () => dispatch(fetchUsers()), 
});

export default connect(mSTP, mDTP)(Homepage);
```

* SASS mixins that I used a bunch of times to save time and space in my scss files. The mixin below is one I used to shape all my icons easily with a hover functionality buily in. This also uses SASS

```
@mixin icon($hw: 45px, $backgroundColor: rgba(241, 240, 240, 0.692), $hoverColor: rgb(209, 209, 209), $borderRadius: 25px, $transitionTime: 0.4s){
   height: $hw;
   width: $hw;
   margin-left: 10px;
   padding: 7px;
   cursor: pointer;
   background-color: $backgroundColor;
   border-radius: $borderRadius;
   &:hover{
      background-color: $hoverColor;
      transition: $transitionTime;
   }
}
```

* The mixin below helped with the changed made when the screen is made smaller:

```
@mixin phoneView($visibility: hidden, $width: 70%, $margin: 0){
   @media (max-width: 1200px) {
      visibility: $visibility;
      width: $width;
      margin: $margin;
   }
}
```

<br></br>
# Resources

- Facebook icon is by artist: https://www.freepik.com 
  - www.flaticon.com
  - https://www.flaticon.com/free-icon/facebook_145802?term=facebook&page=1&position=1&page=1&position=1&related_id=145802&origin=search


- The Github icon is from Github themselves!:
   - https://github.com/logos


- Linkedin icon is by artist: https://www.freepik.com
   - at: https://www.flaticon.com/free-icon/linkedin_1384072

- Market icon is by artist: https://smashicons.com/Smashicons
   * https://www.flaticon.com