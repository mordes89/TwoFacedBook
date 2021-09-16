class Comments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :parent_post_id, null: false
      t.integer :num_likes, null: false
      t.timestamps
    end

    add_index :comments, :author_id
    add_index :comments, :parent_post_id
  end
end
