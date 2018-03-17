import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import Cookies from 'universal-cookie'



class LogoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
      }
    }


    render() {

        if (!this.props.show) {
          return ""
        } else {
          return (
          <div className="static-modal">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>Thank you for visting!</Modal.Body>

              <Modal.Footer>
                <Button onClick={this.props.onSave} bsStyle="primary">Click here to confirm logout</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
          )
        }
    }
  }





export default LogoutModal;
