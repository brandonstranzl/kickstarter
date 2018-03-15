import React, { Component } from 'react'
import {Grid, Button, Thumbnail, Row, Col, PageHeader, Modal, Table} from 'react-bootstrap'
import Demo from './Demo'
// import TopNav from './TopNav'
import {Route, Switch, Link} from 'react-router-dom'

// import Dialog from './Dialog'
// import Modal from './Modal';

// import $ from 'jquery'
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

  // Client-side model

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
    .then(data => {
      if(!data.error) {
        this.setState({ demos: data })
      }
    })
    // .then(demos => this.setState({ demos: data }))
    .catch(e => console.log('parsing failed'))

    }

    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

  //
  //   DemoStore.findAll() // DemoStore does the API fetching!
  //   .then((result) => console.log(result))//this.setState({demos: result.data, errors: null}))
  //   .catch((errors) => this.setState({errors: errors}))
  // }

  render() { 
    return ( 
      <div>
        {/*<TopNav user={this.state.user}/>*/}

        {this.state.demos.map((demo, id) => {
          return (
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <Thumbnail src="https://img.youtube.com/vi/bCb6JEjbwhQ/0.jpg">
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