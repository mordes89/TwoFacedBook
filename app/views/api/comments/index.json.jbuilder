@comments.each do |comment|
   json.set! comment.id do
       json.extract! comment, :id, :body, :author_id, :parent_post_id, :created_at, :photo
       json.photoUrl url_for(comment.photo) if comment.photo.attached?
       json.author comment.author, :first_name, :last_name        
   end
end