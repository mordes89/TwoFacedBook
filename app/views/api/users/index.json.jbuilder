@users.each do |user|
   json.set! user.id do
       json.extract! user, :id, :first_name, :last_name, :work, :school, :relationship, :bio, :birthday#, :photo
    #    json.photoUrl url_for(@user.photo) if @user.photo.attached? 
   end
end