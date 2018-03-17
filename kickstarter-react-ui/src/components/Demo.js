import React from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {Button, PageHeader, Col, Row, Grid, ListGroup, ListGroupItem} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'
import Dialog from './Dialog'

import Resource from '../utilities/resource'
const DemoStore = Resource('demos')

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      demoId: (this.props.match.params.id || null),
      demo: {},
      show: true,
      redirect: '',
      errors: []
      }
    }


  componentDidMount() {
  // if (!this.state.demoId) return
  fetch(`http://localhost:3000/demos/${this.props.match.params.id}`)
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then((response) => {
    if (response.ok) {
      this.setState({ demo: response.data })
      } else {
      this.setState({ errors: response.error_msg })
      }
    })
  };

    _hide = () => {
    this.setState({show: false, redirect: '/demos'})
    }

  render() {
    console.log("this is the state", this.state)
    console.log(this.state.demo)

     if (this.state.redirect) return <Redirect to={this.state.redirect} />

    return (
      <Grid>
        <Row className="show-grid">

          <Col xs={12} md={8}>
            <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
            <iframe width="240" height="200" src={`https://www.youtube.com/embed/${this.state.demo.videos}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Col>

          <Col xs={6} md={4}>
            <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>

            <ListGroup>
              <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
              <ListGroupItem header="Heading 2" href="#">
                Linked item
              </ListGroupItem>
              <ListGroupItem header="Heading 3" bsStyle="danger">
                Danger styling
              </ListGroupItem>
            </ListGroup>;

          </Col>

        </Row>

      </Grid>

        )
      }
    }


export default Demo
