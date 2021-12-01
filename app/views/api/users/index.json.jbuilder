@users.each do |user|
   json.set! user.id do
       json.extract! user, :id, :first_name, :last_name, :work, :school, :relationship, :bio, :birthday, :created_at, :address, :originally_from, :joinedTFB
       json.profile_photo url_for(user.profile_photo) if user.profile_photo.attached? 
       json.cover_photo url_for(user.cover_photo) if user.cover_photo.attached? 
   end
end