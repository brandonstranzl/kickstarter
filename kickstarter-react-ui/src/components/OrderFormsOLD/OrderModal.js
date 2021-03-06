import React from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl, Clearfix} from 'react-bootstrap'
import Cookies from 'universal-cookie'
import SignUpForm from './SignUpForm'

class OrderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: true,
      SignUpShow: false
    }
  }

  render() {

    if (!this.props.show) {
      return ""
    } 
    else {
      return (
        <div>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Order Modal</Modal.Title>
            <Button className="close" onClick={this.props.toggleModal}>&times;</Button>
          </Modal.Header>
          <Modal.Body>
            <SignUpForm toggleModal={this.props.toggleModal}/>
          </Modal.Body>
        </Modal.Dialog>
        </div>
        )
    }
  }
}

export default OrderModal