class AddFields < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :originally_from, :string
    add_column :users, :address, :string
    add_column :users, :joinedTFB, :string
  end
end
