import React from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {Button, PageHeader, Col, Row} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      demoId: (this.props.match.params.id || null),
      demo: {},
      showDetails: true,
      redirect: '',
      }
    }



  componentDidMount() {
  if (!this.state.demoId) return
  fetch(`http://localhost:3000/demos/${this.props.match.params.id}`)
  .then(r => r.json())
  .then(data => this.setState({ demo: data }))
  // .then(demos => this.setState({ demos: data }))
    .catch(e => console.log('parsing failed'))
  }

  // _hide = () => {
  // this.setState({show: false, redirect: '/demos'})
  // }

  render() {

  if (this.state.demo) {
    console.log('HERE PUTS THE DEMO:');

    console.log(this.state.demo);
  }

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
