import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import NewDemoForm from './NewDemoForm'
import {Modal, Button} from 'react-bootstrap'
import ErrorModal from './ErrorModal'
import FailOnSubmitModal from './FailOnSubmitModal'
import SuccessOnSubmitModal from './SuccessOnSubmitModal'


class NewDemoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: true,
      show: ""
    }
    // this.handleNewDemoCreate = this.handleNewDemoCreate.bind(this)
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


// for forms from React Bootstrap  - id is on <FormControl> and htmlFor on <FormGroup.Label>
  // handleNewDemoCreate = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  //   fetch(`http://localhost:3000/demos`,
  //   { method: "POST",
  //     body: JSON.stringify(
  //       {name: "",
  //       description: "",
  //       fundingreq: "",
  //       live: "",
  //       video: "",
  //       category_name: "",
  //       event_name: "",
  //       time: ""   //I dont need to get time except text display to user.
  //       }),
  //     headers: {"content-type": "application/json"}
  //   })
  //   .then(console.log("here is the post", data))
  //   .then(response => response.json())
  //   .catch(error => console.error('Error:', error))
  //   .then((response) => {
  //     if (response.ok) {
  //       this.setState({ msg: response.status })
  //       this.props.toggleModal()
  //     } else {
  //       this.setState({errors: response.status})
  //     }
  //   })
  // }

  render() {
    if (!this.props.show) {
      return ("");
    } else {
    return (
    <Modal.Dialog>
      <div className="newDemoModalContainer">
        <Modal.Header className="newDemoModalHeader">
          <Modal.Title className="modal-tital">Upload Your Demo!</Modal.Title>
          <Button className="newDemoModalHeaderClose" onClick={this.props.toggleModal}>&times;</Button>
        </Modal.Header>
      </div>
      <Modal.Body className="newDemoModalBody">

       <NewDemoForm
        show={this.props.show}
        toggleModal={this.props.toggleModal}
       />

      </Modal.Body>
    </Modal.Dialog>)
    }
  }
}

export default NewDemoCreate;
