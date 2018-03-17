import React from 'react'
import {Modal} from 'react-bootstrap'

const Dialog = (props) => (
  
  <Modal
    show={props.show}
    onHide={props.onHide}
    className='dialog-modal'>

    <Modal.Header closeButton>
      <Modal.Title>
        {props.title}
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
    <p>
      You selected {props.demo.name}
    </p>
    <p>
      {props.demo.description}
      {props.demo.votes}

    </p>
    </Modal.Body>

    {props.footer &&
      <Modal.Footer>
        {props.footer}
      </Modal.Footer>
    }
  </Modal>
)

export default Dialog
