import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import {Modal, Button, Table} from 'react-bootstrap'

// class FailOnSubmitModal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // show: ""
//     }
//   }
const FailOnSubmitModal = (props) => {

  // componentWillMount() {
  //   this.setState({
  //     show: this.props.show
  //   })
  // }

  // toggleFailOnSubmit = () => {
  //     this.setState({
  //     show: !this.state.show
  //   });
  // }



// render() {
    // if (!this.props.show) {
    //     return ("")
    //     } else {
        return (
      <div>
      <Modal.Dialog>

      <Modal.Header className="newDemoModalHeader">

        <Modal.Title className="error-msg-modal-title">SOMETHING IS WRONG</Modal.Title>

      </Modal.Header>

      <Modal.Body>

      <Table>
      <thead>
      <th>
      <tr>It looks like like not all your data was input.  Please try again.</tr>
      </th>
      </thead>
      <tbody>
      <tr>
      <img src={process.env.PUBLIC_URL + "/images/if_doc_7489920.svg"} width="50"></img>
      </tr>
      <tr>
      <td><Button onClick={this.props.toggle} bsStyle="primary" bsSize="large">
      Click to Close</Button></td>
      </tr>
      </tbody>
      </Table>
      </Modal.Body>

      </Modal.Dialog>

      </div>
      )
    }
  // }


export default FailOnSubmitModal;
