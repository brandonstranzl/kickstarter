class UpdateDemosToChangeNameofProgressColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :demos, :progressToFundingGoal
    add_column :demos, :progress, :integer

  end
end
