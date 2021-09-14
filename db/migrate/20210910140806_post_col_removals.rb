class PostColRemovals < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :num_likes
    remove_column :posts, :num_comments
    remove_column :posts, :created_at
    remove_column :posts, :updated_at
  end
end
