import React, { Component } from 'react'
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import Cookies from 'universal-cookie'


const Order = (props) => (
<div>
<div>
<div className="containerForm">
  <Form>
    <FormGroup controlId="formBasicText">
	    <FormControl type="text" placeholder="Enter full name" />
  	</FormGroup>{' '}
		<FormGroup controlId="formBasicText">
    	<FormControl type="email" placeholder="Enter email" />
  	</FormGroup>{' '}
    <FormGroup controlId="formBasicText">
      <FormControl type="number" placeholder="Enter phone number" />
  	</FormGroup>{' '}
  </Form>	
</div>
</div>
</div>
)

export default Order

{/*<form action="your-server-side-code" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
    data-amount="999"
    data-name="Stripe.com"
    data-description="Example charge"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-zip-code="true">
  </script>
</form>*/}