// CardSection.js
import React from 'react';
import {Button} from 'react-bootstrap';

class HeavyButton extends React.Component {
  render() {
    return (

      <Button bsStyle="primary" className="payButton" bsSize="sm">
      <img className="heavyItPayButtonImage" width="25" src={process.env.PUBLIC_URL + "/images/if_delorean-04_748993.svg"}></img>
      {"   "}Charge ${this.props.amount / 100}.00
      </Button>
    );
  }
};

export default HeavyButton;
