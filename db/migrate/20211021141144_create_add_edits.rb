class CreateAddEdits < ActiveRecord::Migration[6.1]
  def change
    create_table :add_edits do |t|
      add_column :comments, :edit, :boolean, :default => false
    end
  end
end
