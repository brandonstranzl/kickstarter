import React from 'react';
import {Modal, Button} from 'react-bootstrap'


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

              <Modal.Body>One fine body...</Modal.Body>

              <Modal.Footer>
                <Button onClick={this.props.onClose}>Close</Button>
                <Button onClick={this.props.onSave} bsStyle="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
          )
        }
    }
  }





export default LogoutModal;
