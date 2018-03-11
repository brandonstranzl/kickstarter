class AddFeaturedFieldCatAssocUserAssocToDemos < ActiveRecord::Migration[5.1]
  def change
    add_column :demos, :featured, :boolean
    add_reference :demos, :category, polymorphic: true
    add_reference :demos, :user, polymorphic: true
  end
end
