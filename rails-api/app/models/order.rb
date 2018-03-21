class Order < ApplicationRecord
  belongs_to :user
  belongs_to :demo




  # def process_payment(params[:stripeToken, :amount, :user_id, :currency])
  #   Stripe::Charge.create(
  #     source:      params[:stripeToken],
  #     amount:      params[:amount], # in cents
  #     description: params[:user_id],
  #     currency:    params[:currency]
  #   )
  #   # order.save!
  #   # order
  # end



end
