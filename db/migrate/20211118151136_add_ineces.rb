class AddIneces < ActiveRecord::Migration[6.1]
  def change
    add_index :users, :originally_from
    add_index :users, :address
    add_index :users, :joinedTFB
    add_index :users, :birthday
    add_index :users, :bio
  end
end
