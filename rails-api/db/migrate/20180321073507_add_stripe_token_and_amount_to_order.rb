class AddStripeTokenAndAmountToOrder < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :stripeToken, :text
  end
end
