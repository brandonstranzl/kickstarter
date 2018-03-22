import React from 'react'
import Cookies from 'universal-cookie'
import FailOnSubmitModal from './FailOnSubmitModal'
import SuccessOnSubmitModal from './SuccessOnSubmitModal'
// import {Input} from 'reactstrap';
import {
  Button,
  ControlLabel,
  InputGroup,
  FieldGroup,
  Form,
  FormControl,
  FormGroup,
  Grid,
  HelpBlock,
  Radio,
  Label,
  ListGroupItem,
  Well} from 'react-bootstrap'
import moment from 'moment';

class NewDemoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      fundingreq: "",
      live: "",
      videos: "",
      category_id: "",
      event_id: "",
      time: "",
      msg: "",
      status: "",
      user: ""//,
      // SuccessOnSubmit: "",
      // FailOnSubmit: ""
    }
    this.handleChange = this.handleChange.bind(this)
    // this.toggleFailOnSubmit = this.toggleFailOnSubmit.bind(this)
    // this.toggleSuccessOnSubmit = this.toggleSuccessOnSubmit.bind(this)

  }

  componentWillMount() {
    const cookies = new Cookies();
    if (cookies.get('userCookie')) {
      this.setState({
      user: (cookies.get('userCookie')),
      // FailOnSubmit: false,
      // ShowOnSubmit: false
      });
    }
  }

  // toggleSuccessOnSubmit = () => {
  //     this.setState({
  //   SuccessOnSubmit: !this.state.SuccessOnSubmit
  //   })
  // }
  //
  // toggleFailOnSubmit = () => {
  //   this.setState({
  //   FailOnSubmit: !this.state.FailOnSubmit
  //   })
  // }


  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  }



// for forms from React Bootstrap  - id is on <FormControl> and htmlFor on <FormGroup.Label>
  handleNewDemoCreate = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const cookies = new Cookies();
    fetch(`http://localhost:3000/demos`,
    { method: "POST",
      body: JSON.stringify(
        {demo: {
          name: this.state.name,
          description: this.state.description,
          fundingreq: this.state.fundingreq,
          live: this.state.live,
          videos: this.state.videos,
          category_id: this.state.category_id,
          event_id: this.state.event_id,
          user_id: cookies.get('userCookie').id
        }}),
      headers: {"content-type": "application/json"}
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      if (response.ok) {
        // debugger
        alert("Thank you for your Demo")
        // this.props.toggleNewDemoForm()
        // this.toggleSuccessOnSubmit()
      } else {
        // debugger
        alert("Error")
        // this.toggleFailOnSubmit();
      }
    })
  }

  render() {
  return (

          <div>
            <form onSubmit={this.handleNewDemoCreate}>

              <FormGroup controlId="name" validationState="success">
                <ControlLabel>Please enter your Demo name:</ControlLabel>
                <FormControl type="input" name="name"
                placeholder="My Demo Name"  onChange={this.handleChange} />
                <HelpBlock>Help text with validation state.</HelpBlock>
              </FormGroup>

              <FormGroup controlId="category_id">
                <ControlLabel>Select Demo Category:</ControlLabel>
                  <FormControl name="category_id" componentClass="select" placeholder="select"
                   onChange={this.handleChange}>
                    <option value="161">Web App</option>
                    <option value="161">iOS App</option>
                    <option value="162">UI/UX App</option>
                    <option value="163">ioT/Hardward</option>
                  </FormControl>
              </FormGroup>

              <FormGroup controlId="description">
                <ControlLabel>Demo Description</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea"
                name="description" onChange={this.handleChange} />
              </FormGroup>

              <FormGroup controlId="fundingreq">
                <ControlLabel>Funding Goal</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl name="fundingreq" type="integer" onChange={this.handleChange}/>
                    <InputGroup.Addon>.00</InputGroup.Addon>
                  </InputGroup>
              </FormGroup>

              <FormGroup controlId="formValidationError2" validationState="error">
                <ControlLabel>For Live Demos, please select the event:</ControlLabel>
                <FormControl name="event_id" componentClass="select" placeholder="select"
                 onChange={this.handleChange}>
                  <option value="50">Hacker Stack</option>
                  <option value="51">Lighthouse Labs</option>
                  <option value="52">Brainstation</option>
                  <option value="53">HackerYou</option>
                </FormControl>
                </FormGroup>

              <FormGroup controlId="live">
                <ControlLabel>For And the live event date:</ControlLabel>
                <FormControl name="live" type="input" placeholder="MM/DD/YYYY"
                 onChange={this.handleChange}>
                </FormControl>
                </FormGroup>

              <FormGroup controlId="videos">
                <ControlLabel>Video URL:</ControlLabel>
                <FormControl name="videos" componentClass="textarea" placeholder="
                Please paste the URL for your video or livestream here" onChange={this.handleChange} />
              </FormGroup>

              <FormGroup>
                <Button color="warning" type="Submit">Click Here to Submit and Create Your Demo!</Button>
              </FormGroup>
            </form>

          </div>

          )
        }
      }

export default NewDemoForm;

// <FailOnSubmitModal showFail={this.state.FailOnSubmit} toggle={this.toggleFailOnSubmit}/>
// <SuccessOnSubmitModal  showSuccess={this.state.SuccessOnSubmit} toggle={this.toggleSuccessOnSubmit}/>



// <Calendar format='DD/MM/YYYY' date='4-12-2014' />
