class AddDobIndex < ActiveRecord::Migration[6.1]
  def change
    add_index :users, :birthday
  end
end
