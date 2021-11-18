class RemoveBirthday < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :birthday
  end
end
