@users.each do |user|
   json.set! user.id do
       json.extract! user, :id, :first_name, :last_name, :work, :school, :relationship, :bio, :birthday, :cover_photo, :profile_photo, :created_at, :address, :originally_from, :joinedTFB
    #    json.photoUrl url_for(@user.photo) if @user.photo.attached? 
   end
end