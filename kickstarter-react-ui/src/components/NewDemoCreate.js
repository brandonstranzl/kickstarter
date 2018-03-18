import React, { Component } from 'react'
import Cookies from 'universal-cookie'

class NewDemoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleNewDemoCreate = (data) => {
    fetch(`http://localhost:3000/demos/new`,
    { method: "POST",
      body: JSON.stringify({email: this.state.email, password: this.state.password}),
      headers: {"content-type": "application/json"}
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      if (response.ok) {
        this.setState({ msg: response.msg })
        this.props.toggleModal()
      } else {
        this.setState({errors: response.error_msg})
      }
    }
  }

  render() {
     return (

       <NewDemoForm onSubmit={this.handleNewDemoCreate} />

    )
  }
}

}
export default NewDemoCreate;
