json.extract! @post, :id, :body, :author_id, :created_at, :likes
json.photoUrl url_for(@post.photo) if @post.photo.attached? 
json.author @post.author, :first_name, :last_name
