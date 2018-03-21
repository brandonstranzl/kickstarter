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
              <Modal.Header className="clearfix">
                <Modal.Title className="clearfix" className="logoutTitleBox">
                <img className="logOutImage" width="30" src={process.env.PUBLIC_URL + "/images/flux_capacitor.svg"}></img>
                   &nbsp;Demo88
                <Button className="close" onClick={this.props.toggleLogOutModal}>&times;</Button>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
              <h5>Thank you for visting Demo88!</h5>
              <h5>Where Tech Companies Begin!</h5>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.props.onSave} bsStyle="primary">
                Click here to confirm logout
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
          )
        }
    }
  }





export default LogoutModal;
