import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import NewDemoForm from './NewDemoForm'
import {Modal, Button, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'
import ErrorModal from './ErrorModal'
import FailOnSubmitModal from './FailOnSubmitModal'
import SuccessOnSubmitModal from './SuccessOnSubmitModal'

class NewDemoCreate extends Component {
    constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  toggleNewDemoForm = () => {
    this.setState({
      show: false
    })
  }

  componentDidMount = () => {
    if (!this.props.show) {
      this.setState({
        show: false
      })
    } else {
      this.setState({
        show: true
      })
    }
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    if (!this.props.show) {
      return ("");
    } else {
    return (
        <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Your Demo!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewDemoForm
              show={this.props.show}
              toggleModal={this.props.toggleModal}
            />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
      )
    }
  }
}

export default NewDemoCreate;