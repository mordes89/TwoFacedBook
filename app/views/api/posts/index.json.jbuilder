@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :author_id, :num_likes, :created_at, :photo, :likes
        json.photoUrl url_for(post.photo) if post.photo.attached?
        json.author post.author, :first_name, :last_name, :id       
    end
end

# json.array! @posts do |post|
#     json.extract! post, :id, :body, :author_id, :created_at
#     json.photoUrl url_for(post.photo) if post.photo.attached? 
# end