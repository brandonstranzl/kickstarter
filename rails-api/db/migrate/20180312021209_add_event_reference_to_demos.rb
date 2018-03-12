class AddEventReferenceToDemos < ActiveRecord::Migration[5.1]
  def change
    add_reference :demos, :event, foreign_key: true
  end
end
