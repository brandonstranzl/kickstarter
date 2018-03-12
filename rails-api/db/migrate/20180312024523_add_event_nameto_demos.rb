class AddEventNametoDemos < ActiveRecord::Migration[5.1]
  def change
    add_column :demos, :event, :text
  end
end
