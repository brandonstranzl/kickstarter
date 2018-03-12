class FixEventReferenceInDemos < ActiveRecord::Migration[5.1]
  def change
    remove_reference :demos, :event, foreign_key: true
    add_reference :demos, :event
  end
end
