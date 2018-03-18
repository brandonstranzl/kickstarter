import React from 'react'

const NewDemoForm = (props) => (

  <div>
  <Form onSubmit={this.handleSubmit}>
    <FormGroup>
      <Label for="name">Demo Name</Label>
      <Input />
    </FormGroup>
    <FormGroup>
      <Label for="category">Category</Label>
      <Input />
    </FormGroup>
    <FormGroup>
      <Label for="description">Demo Description</Label>
      <Input />
    </FormGroup>
    <FormGroup>
      <Label for="fundingreq">Funding Goal</Label>
      <Input />
    </FormGroup>
    <FormGroup>
      <Label for="event">Name of Live Event</Label>
      <Input />
    </FormGroup>
    <FormGroup>
      <Label for="live">Date of Live Presentation</Label>
      <Input />
    </FormGroup>
    <FormGroup>
      <Label for="video">Video Id</Label>
      <Input />
    </FormGroup>

    <FormGroup>
    <Button color="warning" type="Submit" onClick={this.onSubmit}>Submit</Button>
    </FormGroup>
   </Form>
   </div>


)

export default NewDemoForm;
