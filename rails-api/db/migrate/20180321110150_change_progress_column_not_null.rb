class ChangeProgressColumnNotNull < ActiveRecord::Migration[5.1]
  def change
    change_column :demos, :progress, :integer, :default => 1
  end
end
