class PostTableColumnAdding < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :num_likes, :integer
    add_column :posts, :num_comments, :integer
    add_timestamps(:posts)
  end
end
