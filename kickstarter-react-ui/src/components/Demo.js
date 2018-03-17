import React from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {Button, PageHeader, Col, Row, Grid, ListGroup, ListGroupItem, ProgressBar, wellStyles} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'
import Dialog from './Dialog'

import Resource from '../utilities/resource'
const DemoStore = Resource('demos')

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      demoId: (this.props.match.params.id || null),
      demo: { event: {}, category: {}, user: {} },
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

     const now = 60;
     const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

    return (
      <Grid>
        <Row className="show-grid">

          <Col xs={11} md={7}>

            <iframe width="500" height="380" src={`https://www.youtube.com/embed/${this.state.demo.videos}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            <ListGroup className="contributeButtonOnDetailsPage">

            <Button bsStyle="primary" bsSize="large" block>
              Give Money To This Demo
            </Button>
            </ListGroup>



          </Col>

          <Col xs={7} md={5}>


            <ListGroup>
              <ListGroupItem header={this.state.demo.name}>
              </ListGroupItem>
              <ListGroupItem header={`Category: ${this.state.demo.category.name}`}>
              </ListGroupItem>
              <ListGroupItem header="Description">
              {this.state.demo.description}
              </ListGroupItem>
              <ListGroupItem header="Live Stream:">
              Event: {this.state.demo.event.name}
              <br></br>
              Live Stream Date: {this.state.demo.event.date}
              </ListGroupItem>
              <ListGroupItem header="Funding Needed">
                {this.state.demo.fundingreq}
              </ListGroupItem>
              <ListGroupItem header="Funding Progress:">
              <ProgressBar now={now} label={`${now}%`} />
                </ListGroupItem>
              <ListGroupItem>
              <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
              </ListGroupItem>
              </ListGroup>

          </Col>

        </Row>

        <Row className="show-grid">

          <Col xs={11} md={7}>




            </Col>
            </Row>

      </Grid>

        )
      }
    }


export default Demo
