class Api::LikesController < ApplicationController
   def index
      @likes = Like.all #params[:author_id] == {currentUser????} ? like.where(author_id: params[:author_id]) : Post.all
      render :index
   end

   def show
      @like = Like.find_by(id: params[:id])
      render :show
   end

   def create
      @like = Like.new(like_params) 
      if @like.save
         # Post.find_by(id: params[:parent_post_id]).likes.reload
         render :show
      else         
         render json: @like.errors.full_messages, status: 422
      end
   end
     
   def destroy
      @like = Like.find(params[:id])
      if @like
         @like.destroy
         # Post.find_by(id: params[:parent_post_id]).likes.reload
         render :show
      else
         render json: @like.errors.full_messages, status: 403      
      end
   end
  

   private
   def like_params
      params.require(:like).permit(:id, :parent_post_id, :liker_id)
   end
end
