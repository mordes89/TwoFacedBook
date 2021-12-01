@likes.each do |like|
   json.set! like.id do
       json.extract! like, :id, :parent_post_id, :liker_id
   end
end