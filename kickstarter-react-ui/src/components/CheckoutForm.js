import StripeCheckout from 'react-stripe-checkout';
import {FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup} from 'react-bootstrap'
import Cookies from 'universal-cookie';
import React, { Component } from 'react'

// CheckoutForm.js
// import {
// 	CardElement,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCVCElement,
//   Elements,
//   injectStripe,
// } from 'react-stripe-elements';

// import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      user: ""
    }
  }

  // THIS shold be done in props:
  // componentDidMount() {
  //   const cookies = new Cookies();
  //   if (cookies.get('userCookie')) {
  //     this.setState({
  //     user: cookies.get('userCookie').email
  //     });
  //     console.log("here is the user cookie", cookies.get('userCookie').email)
  //   }
  // }

  handleChange = (e) => {
    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  }



  handleSubmit = (ev) => {
    ev.preventDefault();

  }

  onToken = (token) => {
    console.log(token)
    const data = (token);
    let demo = this.state.name
    let amount = this.state.amount
    fetch(`http://localhost:3000/orders`,
      { method: "POST",
        body: JSON.stringify(
          {
            stripeToken: token.id,
            email: token.email,
            demo: demo,
            amount: amount
          }),
          headers: {"content-type": "application/json"}
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
    }


  render() {
    return (
      <div>
      <form>

      <FormGroup>
        <ControlLabel>Demo name:</ControlLabel>
        <FormControl type="input" name="name"
        placeholder="Demo Name" onChange={this.handleChange}/>
      </FormGroup>

      <FormGroup controlId="fundingreq">
        <ControlLabel>Funding You Would Like to Provide:</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl name="amount" type="integer" onChange={this.handleChange}/>
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
      </FormGroup>

        </form>

      <StripeCheckout
        email={this.state.user}
        token={this.onToken}
        amount={this.state.amount}
        allowRememberMe={false}
        stripeKey="pk_test_xUNvQmTjw4mSlN2LXXqsK45u"
      />
      </div>


    );
  }
}

export default CheckoutForm
// export default injectStripe(CheckoutForm);

// <form onSubmit={this.handleSubmit}>
// <CardSection />
// <button>Confirm order</button>
// </form>

// <StripeCheckout
//   token={this.onToken}
//   stripeKey="pk_test_xUNvQmTjw4mSlN2LXXqsK45u"
// />

// <form action="your-server-side-code" method="POST">
//   <script
//     src="https://checkout.stripe.com/checkout.js" class="stripe-button"
//     data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
//     data-amount="999"
//     data-name="Stripe.com"
//     data-description="Example charge"
//     data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
//     data-locale="auto"
//     data-zip-code="true">
//   </script>
// </form>
