export const fetchUsers = () => 
   $.ajax({
      url: '/api/users',
      method: 'GET',
   });



export const fetchUser = (userId) => 
   $.ajax({
      url: `/api/users/${userId}`,
   });

export const createUser = (formData) => {   
   return(
      $.ajax({
         url: '/api/users',
         method: 'POST',
         data: formData,
         contentType: false,
         processData: false
      })
   )
};

export const updateUser = (formData) => {
   return $.ajax({
      url: `/api/users/${formData.get('user[id]')}`,
      method: 'PATCH',
      data: formData,  
      contentType: false,
      processData: false 
   });
}

export const deleteUser = (userId) => 
   $.ajax({
      url: `/api/users/${userId}`,
      method: 'DELETE',
   });