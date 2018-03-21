// CardSection.js
import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (

      <div style={{fontSize: '2em'}}>
        <label>
          Card details
        </label>
        <CardElement style={{base: {fontSize: '18px'}}} />
      </div>
    );
  }
};

export default CardSection;
