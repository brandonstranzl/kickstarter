import React from 'react'
// import {Input} from 'reactstrap';
import {ControlLabel, InputGroup, FieldGroup, Radio, Label, ListGroupItem, FormControl, FormGroup, Button, Grid, Form, Well} from 'react-bootstrap'
import moment from 'moment';

const NewDemoForm = (props) => (

  <div>

    <Form>

        <ControlLabel>Please enter your Demo name:</ControlLabel>
        <FormControl label="Demo Name" placeholder="My Demo Name">
        </FormControl>
        <br></br>
        <FormGroup>
        <ControlLabel>Select Demo Category:</ControlLabel>
        <ListGroupItem bsStyle="info">
        <Radio name="Web_App" inline>
          Web App
        </Radio>{' '}
        <Radio name="iOS App" inline>
          iOS App
        </Radio>{' '}
        <Radio name="UIUX App" inline>
          UI/UX App
        </Radio>
        <Radio name="ioTorHardware App" inline>
          ioT/Hardware
        </Radio>
        </ListGroupItem>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Demo Description</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>

        <FormGroup>
        <ControlLabel>Funding Goal</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormControl type="integer" />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
          </FormGroup>

          <FormGroup>
          <Radio name="liveEvent">
          Live Event?
          </Radio>
          </FormGroup>

          <FormGroup>
          <ControlLabel>Video URL:</ControlLabel>
          <FormControl componentClass="textarea" placeholder="
          Please paste the URL for your video or livestream here" />
          </FormGroup>

        <FormGroup>
        <Button color="warning" type="Submit" onClick={this.submitForm}>Click Here to Submit and Create Your Demo!</Button>
        </FormGroup>

    </Form>



  </div>


)

export default NewDemoForm;


// <Calendar format='DD/MM/YYYY' date='4-12-2014' />
