class Api::UsersController < ApplicationController
  def index
    @users = User.all 
    render :index
  end

  def create
     @user = User.new(user_params) 
     if @user.save
       login(@user)
       render "api/users/show"
     else
       render json: @user.errors.full_messages, status: 422
     end
   end

  def update
    @user = User.find_by(id: params[:id])
    if @user && @user.update(user_params)  
       render :show
    else
       render json: @user.errors.full_messages, status: 403        
    end
  end
 
   private 
   def user_params
     params.require(:user).permit(:id, :email, :password, :first_name, :last_name, :work, :school, :relationship, :bio, :birthday, :cover_photo, :profile_photo, :address, :originally_from, :joinedTFB)
   end
 end
 