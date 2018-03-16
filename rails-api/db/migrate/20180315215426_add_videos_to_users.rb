class AddVideosToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :demos, :videos, :text
  end
end
