import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import {Modal, Button, Table} from 'react-bootstrap'

class SuccessOnSubmitModal extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show : ""
  //   }
  // }

  // componentWillMount = () => {
  //   this.setState({
  //     show: this.props.show
  //   })
  // }
  //
  // toggleSuccessOnSubmit = () => {
  //     this.setState({
  //     show: !this.state.show
  //   });
  // }



render() {
    if (!this.props.show) {
        return ""
        } else {
        return (
      <div>
      <Modal.Dialog>

      <Modal.Header className="newDemoModalHeader">

        <Modal.Title className="error-msg-modal-title">SUCCESS</Modal.Title>

      </Modal.Header>

      <Modal.Body>

      <Table>
      <thead>
      <th>
      <tr>Thank you for your Demo submission</tr>
      </th>
      </thead>
      <tbody>
      <tr>
      <img src={process.env.PUBLIC_URL + "/images/if_doc_7489920.svg"}></img>
      </tr>
      <tr>
      <td><Button onClick={this.toggleSuccessOnSubmit} bsStyle="primary" bsSize="large">
      Click to Close</Button></td>
      </tr>
      </tbody>
      </Table>
      </Modal.Body>

      </Modal.Dialog>

      </div>
      )
    }
  }
}

export default SuccessOnSubmitModal;
