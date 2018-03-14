class Order < ApplicationRecord
  belongs_to :event
  belongs_to :user



  def perform_stripe_charge
    Stripe::Charge.create(
      source:      params[:stripeToken],
      amount:      cart_total, # in cents
      description: "Jungle Order",
      currency:    'cad'
    )
  end

end
