import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

class StripeButton extends React.Component {

  onToken = (token) => {

    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
}

export default StripeButton

// <StripeCheckout
//   token={this.onToken}
//   stripeKey="my_PUBLISHABLE_stripekey"
// />
