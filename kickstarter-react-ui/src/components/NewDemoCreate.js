import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import NewDemoForm from './NewDemoForm'
import {Modal, Button} from 'react-bootstrap'



class NewDemoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: true,
      msg: "",
      status: ""
    }
    this.handleNewDemoCreate = this.handleNewDemoCreate.bind(this)
  }


  handleNewDemoCreate = (data) => {
    fetch(`http://localhost:3000/demos/new`,
    { method: "POST",
      body: JSON.stringify(data),
      headers: {"content-type": "application/json"}
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      if (response.ok) {
        this.setState({ msg: response.status })
        this.props.toggleModal()
      } else {
        this.setState({errors: response.status})
      }
    })
  }

  render() {

    if (!this.props.show) {
        return ""
        } else {
        return (

    <Modal.Dialog>
      <div className="modalContainer">
      <Modal.Header className="newDemoModalHeader">
        <Modal.Title className="modal-tital">Upload Your Demo!</Modal.Title>
        <Button className="newDemoModalHeaderClose" onClick={this.props.toggleModal}>&times;</Button>
      </Modal.Header>
      </div>
      <Modal.Body>

           <NewDemoForm show={this.props.show} toggleModal={this.props.toggleModal}
            submitForm={this.handleNewDemoCreate}
            />

        </Modal.Body>

        </Modal.Dialog>

          )
        }
      }
    }


export default NewDemoCreate;
