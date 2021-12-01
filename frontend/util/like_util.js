export const fetchLikes = () => 
   $.ajax({
   url: '/api/likes',
});

export const fetchLike = (likeId) => 
   $.ajax({
      url: `/api/likes/${likeId}`,
   });

export const createLike = (formData) => {   
   return(
      $.ajax({
         url: '/api/likes',
         method: 'POST',
         data: formData,
         contentType: false,
         processData: false
      })
   )
};

export const deleteLike = (likeId) => 
   $.ajax({
      url: `/api/likes/${likeId}`,
      method: 'DELETE',
   });