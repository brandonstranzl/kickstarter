import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import {Modal, Button} from 'react-bootstrap'

class ErrorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: true,
    }
  }
render() {
    if (!this.props.show) {
        return ""
        } else {
        return (
      <Modal.Dialog>

      <Modal.Header className="newDemoModalHeader">
        <Modal.Title className="modal-tital">Error</Modal.Title>

      </Modal.Header>

      <Modal.Body>
      <h3> There are no cookies here. You must be logged in to create a demo.</h3>
      <img className="cookieMonster" src={process.env.PUBLIC_URL + "/images/if_clock-tower_748997.svg"}></img>


      <Button onClick={this.props.toggleErrorModal} bsStyle="primary" bsSize="large"></Button>
      </Modal.Body>

      </Modal.Dialog>
      )
    }
  }
}

export default ErrorModal;
