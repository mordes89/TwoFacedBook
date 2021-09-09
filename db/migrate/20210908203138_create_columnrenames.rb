class CreateColumnrenames < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :username, :email
  end
end
