import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import Cookies from 'universal-cookie'

className SignUpModal extends React.Component {
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
        } else {
          return (

<div>

    <Modal.Dialog>

      <Modal.Header>
        <Modal.Title>Sign Up Modal</Modal.Title>
      </Modal.Header>

        <Modal.Body>


            <form>
           <FormGroup>
             <ControlLabel>Static text</ControlLabel>
             <FormControl.Static>email@example.com</FormControl.Static>
           </FormGroup>

           <Button type="submit">Submit</Button>
           </form>

           <Modal.Body>

</div>



          )
        }
      }
    }
