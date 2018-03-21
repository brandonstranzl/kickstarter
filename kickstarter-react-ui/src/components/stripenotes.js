import StripeCheckout from 'react-stripe-checkout';
import React from 'react';
// import {Elements} from 'react-stripe-elements';
import {injectStripe} from 'react-stripe-elements';
import {
  // Button,
  ControlLabel,
  // InputGroup,
  // FieldGroup,
  Form,
  FormControl,
  FormGroup,
  // Grid,
  HelpBlock,
  // Radio,
  // Label,
  // ListGroupItem,
  Well} from 'react-bootstrap'
import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      user: "",
      amount: ""
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = (ev) => {
    // ev.preventDefault();
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    // this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
    //   console.log('Received Stripe token:', token);
    // });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  // handleChange(e) {
  //   let newState = {}
  //   newState[e.target.name] = e.target.value;
  //   this.setState(newState)
  // }

  onToken = (token) => {
    console.log(token)
    const data = (token);
    fetch(`/http://localhost:3000/orders`,
      { method: "POST",
        body: JSON.stringify(
          {
            stripeToken: token.id,
            email: token.email
          }),
          headers: {"content-type": "application/json"}
        })
        .then(console.log("here is the post", data))
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            alert(`We are in business, ${response.data.email}`);
        });
    }

  render() {
    return (
      <form>

      <FormGroup>
        <ControlLabel>Demo name:</ControlLabel>
        <FormControl type="input" name="name"
        placeholder="Demo Name" />
        <HelpBlock>Help text with validation state.</HelpBlock>
      </FormGroup>

          <StripeCheckout
            token={this.onToken}
            amount={9990000}
            email={this.state.email}
            allowRememberMe={false}
            // closed={this.onClosed}
            stripeKey="pk_test_xUNvQmTjw4mSlN2LXXqsK45u"
          />

        </form>
      );
    }
  }

export default CheckoutForm

// onClick={this.handleSubmit}


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
