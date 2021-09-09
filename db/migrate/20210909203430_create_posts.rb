class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :num_likes, null: false
      t.integer :num_comments, null: false
      t.timestamps
    end

    add_index :posts, :author_id
  end
end
