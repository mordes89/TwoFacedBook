export const getPosts = () => $.ajax({
   url: '/api/posts',
});

export const getPost = () => $.ajax({
   url: '/api/posts',
});

export const createPost = (post) => $.ajax({
   url: '/api/posts',
   method: 'POST',
   data: {post}
});

export const updatePost = (post) => $.ajax({
   url: '/api/posts',
   method: 'PATCH',
   data: {post}
});

export const deletePost = (postId) => $.ajax({
   url: '/api/posts',
   method: 'DELETE',
});