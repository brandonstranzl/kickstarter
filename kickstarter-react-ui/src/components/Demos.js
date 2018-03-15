import React from 'react'
import Demo from './Demo'
import Dialog from './Dialog'
// import Modal from './Modal';

// import $ from 'jquery'
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'
import {Button, Grid, Row, Col, PageHeader, Table, Modal} from 'react-bootstrap'
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
    // this.state.map = this.state.map.bind(this);
    }

    componentWillMount() {
    fetch('http://localhost:3000/demos')
    .then(r => r.clone().json())
    .then(data => this.setState({ demos: data }))
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
    if (this.state.demos.length > 0) {
      console.log(this.state.demos);
    }
    return (
    <Row>
      <Col xs={12}>

        <PageHeader>
          Demos
        </PageHeader>

        <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Next Live Demo @</th>
                <th>Live Date!</th>
                <th>Funding Requirements</th>
                <th>Likes</th>
              </tr>
            </thead>


            <tbody>
              {this.state.demos.map((demo, id) => (
                // <tr key={id}>
                  <tr>
                  <td>{demo.id}</td>
                  <td>
                  <Button bsStyle="primary" bsSize="large"
                  onClick={this.toggleModal}>
                    {demo.name}
                  </Button>
                  </td>
                  <td>{demo.description}</td>
                  <td>{demo.category.name}</td>
                  <td>{demo.event.name}</td>
                  <td>{demo.live}</td>
                  <td>{demo.fundingreq}</td>
                  <td>{demo.votes}</td>
                </tr>
            ))}
            </tbody>
            </Table>


          <Switch>
          <Route path="/demos/:id" render={(props) =>
            (<demo {...this.props} />)}
            />
          </Switch>

          <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <Demo />
          </Modal>


          </Col>
          </Row>




      )
    }
  }

export default Demos


  // <Route path="/demos/:id" component={Demo} />
//             // <Route path="/demos/:id" render={(demos) =>
            //   (<demo {...props} {demos} />)}
            // >/
