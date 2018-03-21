import React, { Component } from 'react'
import {Elements} from 'react-stripe-elements';
import Cookies from 'universal-cookie'
import InjectedCheckoutForm from './CheckoutForm';

class MyStoreCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

     return (

       <Elements>
         <InjectedCheckoutForm />
       </Elements>




            )

          }
        }

export default MyStoreCheckout
