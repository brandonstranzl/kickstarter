class CreateDemos < ActiveRecord::Migration[5.1]
  def change
    create_table :demos do |t|
      t.text :name
      t.date :live
      t.text :description
      t.integer :fundingreq
      t.integer :votes

      t.timestamps
    end
  end
end
