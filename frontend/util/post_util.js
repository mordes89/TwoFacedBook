export const fetchPosts = () => 
   $.ajax({
      url: '/api/posts',
   });

export const fetchPost = (postId) => 
   $.ajax({
      url: `/api/posts/${postId}`,
   });

export const createPost = (formData) => { 
   // console.log("Post util formData: ", Array.from(formData)); 
   return(
      $.ajax({
         url: '/api/posts',
         method: 'POST',
         data: formData,
         contentType: false,
         processData: false
      })
   )
};

export const updatePost = (formData) => {
   // console.log("Post util formData: ", Array.from(formData));
     

   return $.ajax({
      url: `/api/posts/${formData.get('post[id]')}`,
      method: 'PATCH',
      data: formData,  
      contentType: false,
      processData: false 
   });
}

export const deletePost = (postId) => 
   $.ajax({
      url: `/api/posts/${postId}`,
      method: 'DELETE',
   });