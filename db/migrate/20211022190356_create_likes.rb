class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :parent_post_id, null: false
      t.integer :liker_id, null: false
      t.timestamps
    end
    add_index :likes, :parent_post_id
    add_index :likes, :liker_id
  end
end
