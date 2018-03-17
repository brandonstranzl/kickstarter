import React from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {Button, PageHeader, Col, Row} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'

import Resource from '../models/resource'
const DemoStore = Resource('demos')

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      demoId: (this.props.match.params.id || null),
      demo: {},
      showDetails: true,
      redirect: '',
      errors: []
      }
    }


  componentDidMount() {
  // if (!this.state.demoId) return
  fetch(`http://localhost:3000/demos/${this.props.match.params.id}`)
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then((response) => console.log(response.json())
  .then((response) => {
    if (response.ok) {
      this.setState({ demo: response.data })
      } else {
      this.setState({ errors: response.error_msg })
      }
    })
  };


  // _hide = () => {
  // this.setState({show: false, redirect: '/demos'})
  // }

  render() {
    console.log("this is the state", this.state)


    return (


    <Row>
      <Col xs={12}>
        <PageHeader>
          DEMOID DEMOID DEMOID Welcome <small>to the DETAILS page</small>
        </PageHeader>
      </Col>
    <Button color="danger">save !</Button>
    </Row>






    )
  }
}
//

export default Demo

// (this.props.match.params.id || null),
