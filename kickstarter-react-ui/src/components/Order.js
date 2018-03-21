import React, { Component } from 'react'
import {Elements} from 'react-stripe-elements';
import Cookies from 'universal-cookie'
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ShowMyStoreCheckOut: ""
    }
  }



  render() {
       // if (!this.State.ShowMyStoreCheckOut) {
       //     return ""
       //     } else {
           return (
             <StripeProvider apiKey="pk_test_12345">
               <MyStoreCheckout />
             </StripeProvider>
            )

          }
        }

export default Order
