json.extract! user, :id, :email, :first_name, :last_name, :created_at, :address, :originally_from, :joinedTFB
json.profile_photoUrl url_for(user.profile_photo) if user.profile_photo.attached? 
json.cover_photoUrl url_for(user.cover_photo) if user.cover_photo.attached?  
