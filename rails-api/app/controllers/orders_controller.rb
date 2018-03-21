class OrdersController < ApplicationController



  def create

    @order = Order.new(order_params)
    process_payment
    if @order.save
      amount = params[:amount]
      @demo = Demo.find(params[:demo_id])
      old_progress = @demo.progress
      new_progress = amount.to_i + old_progress
      Demo.update(params[:demo_id], progress: new_progress)
      puts @demo
      render json: {ok: true, data: @order.as_json, status: :created, msg: "success"}
    else
      render json: {ok: false, status: :unprocessable_entity, error_msg: @order.errors.full_messages}
    end
  end


    private

    def order_params
      params.require(:order).permit(:currency, :amount, :demo_id, :user_id, :stripeToken, :email, :demo, :order)
    end

    def process_payment
      begin
        Stripe.api_key = "sk_test_QixMaM3bimQjGyvHOirA5yYq"

        charge = Stripe::Charge.create(
          source:      params[:stripeToken],
          amount:      (params[:amount].to_f * 100).to_i, # in cents
          description: params[:user_id],
          currency:    params[:currency]
        )
      rescue Stripe::StripeError => e
          puts error: e.message
          self.fail!
      end
    end

end
