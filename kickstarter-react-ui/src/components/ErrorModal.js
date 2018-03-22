import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import {Modal, Button, Table} from 'react-bootstrap'
import SignUpModal from './SignUpModal'

class ErrorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: true,
      SignUpModal: ""
    }
  }

  componentWillMount() {
    this.setState({
      SignUpModal: false
    })
  }

  toggleSignUpModal = () => {
      this.setState({
      SignUpModal: !this.state.SignUpModal
    });
  }



render() {
    if (!this.props.show) {
        return ""
        } else {
        return (
      <div>
      <Modal.Dialog>

      <Modal.Header className="newDemoModalHeader">

        <Modal.Title className="error-msg-modal-title">ERROR</Modal.Title>

      </Modal.Header>

      <Modal.Body>

      <Table>
      <thead>
      <th>
      <tr>Doh! Sorry to be CRUD, but there are no cookies here.</tr>
      <tr>You can check yourself in the Developer Tools.</tr>
      <tr>You must be logged in to do CRUD: create, edit, or delete.</tr>
      </th>
      </thead>
      <tbody>
      <tr>
      <img className="cookieMonster" src={process.env.PUBLIC_URL + "/images/cookiemonster.svg"}></img>
      </tr>
      <tr>
      <td><Button onClick={this.props.toggleErrorModal} bsStyle="primary" bsSize="large">Click to Close</Button></td>
      <td><Button onClick={this.toggleSignUpModal} bsStyle="primary" bsSize="large">Click to SignUp</Button></td>
      </tr>
      </tbody>
      </Table>
      </Modal.Body>

      </Modal.Dialog>

      <SignUpModal show={this.state.SignUpModal} toggleModal={this.toggleSignUpModal} />
      </div>
      )
    }
  }
}

export default ErrorModal;
