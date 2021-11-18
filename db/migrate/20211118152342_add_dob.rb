class AddDob < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :birthday, :string
  end
end
