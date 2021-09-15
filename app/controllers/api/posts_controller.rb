class Api::PostsController < ApplicationController
   before_action :ensure_logged_in

   def index
      @posts = Post.all #params[:author_id] == {currentUser????} ? Post.where(author_id: params[:author_id]) : Post.all
      render :index
   end

   def show
      @post = Post.find_by(id: params[:id])
      render :show
   end

   def create
      @post = Post.new(post_params) 
      if @post.save
         render :show
      else         
         render json: @post.errors.full_messages, status: 422
      end
   end

   def update
      @post = current_user.posts.find_by(id: params[:id])
      # debugger
      if @post && @post.update(post_params)  
         render :show
      else
         render json: @post.errors.full_messages, status: 403        
      end
   end
   
   def destroy
      @post = current_user.posts.find(params[:id])
      if @post
         @post.destroy
         render :show
      else
         render json: @post.errors.full_messages, status: 403      
      end
   end
  

   private
   def post_params
      params.require(:post).permit(:id, :body, :author_id, :num_likes, :num_comments, :photo)
   end
end