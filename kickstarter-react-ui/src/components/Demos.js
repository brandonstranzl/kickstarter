import React, { Component } from 'react'
import Demo from './Demo'
import $ from 'jquery';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
  import {Link} from 'react-router-dom'

class Demos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demos: []
    }
    // this.state.map = this.state.map.bind(this);
  }



  // componentDidMount() {
  //   // axios.get('http://localhost:3000/demos') //need to learn axios
  //   fetch('http://localhost:3000/demos')
  //   .then(res => res.json())
  //   .then(demos => this.setState({ demos }))
  // }

  componentDidMount() {
    $.get('http://localhost:3000/demos', function(res) {
      console.log("HERE IS THE RES :", res)
      this.setState({demos: res});
    }.bind(this));
  }


  render() {
    return(
      <div>
        {this.state.demos.map((demo, id) => {
          return (
            // <Demo demo={demo} key={demo.id} />
            <div>
            <Row>
            <Col sm="6">
              <Card>
                <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{demo.name}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <ul key={demo.id}>
                    <li> {demo.name}</li>
                    <li> {demo.id}</li>
                    <li>Event_Date {demo.live}</li>
                    <li>description {demo.description}</li>
                    <li>Funding Req {demo.fundingreq}</li>
                    <li>Votes {demo.votes}</li>
                    <li>Event_id {demo.event_id}</li>

                  <Button color="warning"><Link to={`/demos/${demo.id}`}>VIEW THIS DEMO</Link></Button>
                    </ul>
                </CardBody>
              </Card>
              </Col>
             </Row>
            </div>
            )
        })}
      </div>

    )
  }
}


export default Demos
