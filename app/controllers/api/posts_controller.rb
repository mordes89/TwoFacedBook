class PostsController < ApplicationController
   before_action :ensure_logged_in

   def index
      @posts = params[:author_id] ? Post.where(author_id: params[:author_id]) : Post.all
      render :index
    end

   def create
      @post = Post.new(post_params)
      @post.author_id = params[:author_id]
      @post.num_likes = params[:num_likes]
      @post.num_comments = params[:num_comments]
      if @post.save
         render :show
      else         
         render json: @user.errors.full_messages, status: 422
      end
   end

   def update
      @post = current_user.posts.find_by(id: params[:id])
      if @post && @post.update(post_params)  #@post.user_id == current_user.id
         render :show
      else
         render json: @user.errors.full_messages, status: 405         
      end
   end
   
   def destroy
   @post = current_user.posts.find_by(id: params[:id])
   if @post
      @post.destroy
      render :show
   else
      render json: @user.errors.full_messages, status: 405         
   end
end
  

   private
   def post_params
      params.require(:post).permit(:body, :author_id, :num_likes, :num_comments)
   end
end