import React, { Component } from 'react'
import Demo from './Demo'
import TopNav from './TopNav'
import Cookies from 'universal-cookie'

// import Dialog from './Dialog'
// import Modal from './Modal';

// import $ from 'jquery'
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'
import {Grid, Button, Thumbnail, Row, Col, PageHeader, Modal, Table} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'

  // Client-side model
import Resource from '../utilities/resource'
const DemoStore = Resource('demos')


class Demos extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      demos: [],
      selectedDemo: {},
      showDetails: false,
      errors: null,
      isOpen: false
      }
    if (props.location.state) {
      this.state.user = this.props.location.state.user
    }
    // this.state.map = this.state.map.bind(this);
    }

    componentWillMount() {
      fetch('http://localhost:3000/demos')
      .then(r => r.clone().json())
      .then(data => this.setState({ demos: data }))
      // .then(demos => this.setState({ demos: data }))
      .catch(e => console.log('parsing failed'))
      }

    //   DemoStore.findAll() // DemoStore does the API fetching!
    //   .then((result) => this.setState({demos: result, errors: null}))
    //   .catch((errors) => this.setState({errors: errors}))
    // }

    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    // show by category = () =>
    // change demos to categories with videos

  //

  //
  //   DemoStore.findAll() // DemoStore does the API fetching!
  //   .then((result) => console.log(result))//this.setState({demos: result.data, errors: null}))
  //   .catch((errors) => this.setState({errors: errors}))
  // }
  // <TopNav user={this.state.user}/>


  render() {
    return (
      <div>

        {this.state.demos.map((demo, id) => {
          return (
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <Thumbnail src={`https://img.youtube.com/vi/{demo.videos}/0.jpg`}>
                    <h3>{demo.name}</h3>
                    <p>{demo.description}</p>
                    <p>{demo.category.name}</p>
                    <p>{demo.event.name}</p>
                    <p>{demo.live}</p>
                    <p>{demo.fundingreq}</p>
                    <p>{demo.votes}</p>
                    <p>
                      <Button bsStyle="primary" href="/login">Contribute</Button>&nbsp;
                      <Button bsStyle="default">View More</Button>
                    </p>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
            )
        })
      }
      </div>
    )
  }
}

export default Demos