class RemoveEventNameFromDemos < ActiveRecord::Migration[5.1]
  def change
    remove_column :demos, :event, :text
  end
end
