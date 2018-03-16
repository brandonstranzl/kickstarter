class OrdersController < ApplicationController

def create
  @order = Order.new


  charge = perform_stripe_charge
  order  = create_order(charge)


  def create_order(stripe_charge)
    order = Order.new(
      email: params[:stripeEmail],
      # total_cents: cart_total,
      stripe_charge_id: stripe_charge.id, # returned by stripe
    )
    end
    order.save!
    order
  end

  def perform_stripe_charge
    Stripe::Charge.create(
      source:      params[:stripeToken],
      amount:      cart_total, # in cents
      description: "Demo88 orders",
      currency:    'cad'
    )
  end

end
