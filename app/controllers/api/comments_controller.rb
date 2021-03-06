class Api::CommentsController < ApplicationController
   def index
      @comments = Comment.all #params[:author_id] == {currentUser????} ? comment.where(author_id: params[:author_id]) : Post.all
      render :index
   end

   def show
      @comment = Comment.find_by(id: params[:id])
      render :show
   end

   def create
      @comment = Comment.new(comment_params) 
      if @comment.save
         render :show
      else         
         render json: @comment.errors.full_messages, status: 422
      end
   end

   def update
      @comment = Comment.find_by(id: params[:id])
      if @comment && @comment.update(comment_params)  
         render :show
      else
         render json: @comment.errors.full_messages, status: 403        
      end
   end
   
   def destroy
      @comment = Comment.find(params[:id])
      if @comment
         @comment.destroy
         render :show
      else
         render json: @comment.errors.full_messages, status: 403      
      end
   end
  

   private
   def comment_params
      params.require(:comment).permit(:id, :body, :author_id, :num_likes, :parent_post_id, :photo, :edit)
   end
end