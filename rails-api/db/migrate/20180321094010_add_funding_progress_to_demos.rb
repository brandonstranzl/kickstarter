class AddFundingProgressToDemos < ActiveRecord::Migration[5.1]
  def change
    add_column :demos, :progressToFundingGoal, :int
  end
end
