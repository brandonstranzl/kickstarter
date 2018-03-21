import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import {Modal, Button, Table} from 'react-bootstrap'

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

        <Modal.Title className="error-msg-modal-title">ERROR</Modal.Title>

      </Modal.Header>

      <Modal.Body>

      <Table>
      <thead>
      <tr>
      <th>
      <tr>Doh! Sorry to be CRUD, but there are no cookies here.</tr>
      <tr>You can check yourself in the Developer Tools.</tr>
      <tr>You must be logged in to create, edit, or delete your demo.</tr>
      </th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <img className="cookieMonster" src={process.env.PUBLIC_URL + "/images/cookiemonster.svg"}></img>
      </tr>
      <tr>
      <Button onClick={this.props.toggleErrorModal} bsStyle="primary" bsSize="large">Click to Close</Button>
      </tr>
      </tbody>
      </Table>

      </Modal.Body>

      </Modal.Dialog>
      )
    }
  }
}

export default ErrorModal;
