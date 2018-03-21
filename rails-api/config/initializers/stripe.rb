Rails.configuration.stripe = {
  :publishable_key => ENV['pk_test_xUNvQmTjw4mSlN2LXXqsK45u'],
  :secret_key      => ENV['sk_test_QixMaM3bimQjGyvHOirA5yYq']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]

# Stripe.api_key = Rails.application.secrets.stripe_secret_key
