Rails.configuration.stripe = {
  :publishable_key => ENV['pk_test_s4jPh9mguQ56Sy5fDmsUxZ0e'],
  :secret_key      => ENV['sk_test_xQOntrvG66aj3QQFDZ8ho0xf']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
