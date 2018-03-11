class FixReferenceToCatandUserInDemos < ActiveRecord::Migration[5.1]
  def change
    remove_reference :demos, :category, polymorphic: true
    remove_reference :demos, :user, polymorphic: true
    add_reference :demos, :category
    add_reference :demos, :user
  end
end
