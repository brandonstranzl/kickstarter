import React from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {Button, ButtonToolbar, PageHeader, Col, Row, Grid, ListGroup, ListGroupItem, ProgressBar, wellStyles} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'
import {StripeProvider} from 'react-stripe-elements';


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

            <Link to={{ pathname: "/order", state: {demo: this.props.location.state.demo, goal: this.props.location.state.goal, demo_id: this.props.location.state.demo_id}} }>
            <Button bsStyle="primary" bsSize="large" block>
              <span><img className="zapButtonImagesL" className="detailsButtonImage" src={process.env.PUBLIC_URL + "/images/if_capacitor_748998.svg"}
              width="40" height="40"></img></span>
              <span><h4><em>Fund This Demo to 88 mph!</em></h4></span>
            </Button>
            </Link>
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
              <ButtonToolbar>
              <Button bsStyle="warning" className="shareButtons" bsSize="small">
              <img className="heavyIt" src={process.env.PUBLIC_URL + "/images/if_skate_748989.svg"}></img>
              Heavy it!
              </Button>
              <Button className="shareButtons"><div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
              </Button>
              <Button className="shareButtons">
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-show-count="false">Tweet</a>
              </Button>
              </ ButtonToolbar>
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
//
// <span><img className="zapButtonImagesR" width="40" height="40" className="detailsButtonImage" src={process.env.PUBLIC_URL + "/images/lightninglike.svg"}></img>
// </span>
