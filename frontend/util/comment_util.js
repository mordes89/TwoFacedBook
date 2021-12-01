export const fetchComments = () => 
   $.ajax({
   url: '/api/comments',
});

export const fetchComment = (commentId) => 
   $.ajax({
      url: `/api/comments/${commentId}`,
   });

export const createComment = (formData) => {   
   return(
      $.ajax({
         url: '/api/comments',
         method: 'POST',
         data: formData,
         contentType: false,
         processData: false
      })
   )
};

export const updateComment = (formData) => {
   return $.ajax({
      url: `/api/comments/${formData.get('comment[id]')}`,
      method: 'PATCH',
      data: formData,  
      contentType: false,
      processData: false 
   });
}

export const deleteComment = (commentId) => 
   $.ajax({
      url: `/api/comments/${commentId}`,
      method: 'DELETE',
   });