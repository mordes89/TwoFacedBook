class CreateAdds < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :work, :text
    add_column :users, :school, :string
    add_column :users, :relationship, :string
    add_column :users, :bio, :text
    add_column :users, :birthday, :date
    
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :work
    add_index :users, :school
    add_index :users, :relationship
  end
end
