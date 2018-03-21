import StripeCheckout from 'react-stripe-checkout';
import {Grid, Col, Row, FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup, Well} from 'react-bootstrap'
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

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      email: ""
    }
  }

  // THIS shold be done in props:
  componentDidMount() {
    const cookies = new Cookies();
    if (cookies.get('userCookie')) {
      this.setState({
      email: cookies.get('userCookie').email
      });
      console.log("here is the user cookie", cookies.get('userCookie').email)
    }
  }

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
      <Grid>
        <Row>
          <Col xs={12} md={8}>

      <Well><h4>{this.state.email}, please confirm the below contribution:</h4></Well>

      <Well bsSize="small"><h5>Demo to receive funds: {this.props.location.state.demo}</h5></Well>

      <Row>
        <Col xs={8} md={6}>
      <form>
      <FormGroup controlId="fundingreq">
        <ControlLabel>Amount of Funding to Provide:</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl name="amount" type="integer" onChange={this.handleChange}/>
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
      </FormGroup>
      </form>
      </Col>
      </Row>

      <StripeCheckout
        amount={this.state.amount * 100}
        currency={"cad"}
        name={`Contribution to Demo:`}
        description={this.props.location.state.demo}
        email={this.state.email}
        token={this.onToken}
        allowRememberMe={false}
        stripeKey="pk_test_xUNvQmTjw4mSlN2LXXqsK45u"
      />

      </Col>
      </Row>
      </Grid>
      </div>


    );
  }
}

export default Order

// If using react elements:
// export default injectStripe(CheckoutForm);

// <form onSubmit={this.handleSubmit}>
// <CardSection />
// <button>Confirm order</button>
// </form>
//
// OLD ORDER FORM ( for using elements vs checkout)
// import {Elements} from 'react-stripe-elements';
// import Cookies from 'universal-cookie'
// import {StripeProvider} from 'react-stripe-elements';
// import MyStoreCheckout from './MyStoreCheckout';
//
//
// class Order extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // ShowMyStoreCheckOut: ""
//     }
//   }
//
//
//
//   render() {
//        // if (!this.State.ShowMyStoreCheckOut) {
//        //     return ""
//        //     } else {
//            return (
//              <StripeProvider apiKey="pk_test_12345">
//                <MyStoreCheckout />
//              </StripeProvider>
//             )
//
//           }
//         }
//
// export default Order
