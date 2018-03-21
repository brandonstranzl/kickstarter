class OrdersController < ApplicationController

def create
  puts "we got this far"
  @order = Order.new

  charge = perform_stripe_charge
  order  = create_order(charge)
  Stripe.api_key = "sk_test_QixMaM3bimQjGyvHOirA5yYq"



  def perform_stripe_charge
    Stripe::Charge.create(
      source:      params[:stripeToken],
      amount:      params[:amount] , # in cents
      description: "Demo88 Order for "{params[:user_id]},
      currency:    params[:currency]
    )
  end

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

end
