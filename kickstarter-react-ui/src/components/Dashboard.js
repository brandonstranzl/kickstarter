import React, { Component } from 'react';
import {Carousel, Row, Col, PageHeader,} from 'react-bootstrap';
import { Button } from 'reactstrap';
import Cookies from 'universal-cookie'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      demos: [],
      }
    }

  componentDidMount() {
    fetch('http://localhost:3000/demos')
    .then(response => response.json())
    .then((response) => this.setState({ demos: response.data }))
    .catch(e => console.log('parsing failed'))
  }

render() {
  const funding_progess = ((this.state.demos.progress / this.state.demos.fundingreq)*100)

  const sorted = this.state.demos.sort((a,b) => {
      if (a.votes > b.votes) {
        return -1;
      } else if (a.votes < b.votes ) {
        return 1;
      } else {
        return 0;
      }})

  const demosSorted = sorted.slice(0,10)

return(
  <div>
  <PageHeader>
    Welcome to Demo88
    <br></br>
    <small className="smallPageHeader">Launch your demo into the future!</small>
  </PageHeader>
  <Carousel className="carousel">
  {demosSorted.map((demo, id) => {
  return (
        <Carousel.Item>
          <img width={900} height={500} src={`https://img.youtube.com/vi/${demo.videos}/0.jpg`} />
            <Carousel.Caption>
            <h3>{demo.name}</h3>
{/*            <h4>{demo.description}</h4>
            <h4>Number of Likes: {demo.votes}</h4>
            <h4>Funding Goal Met: {Math.ceil((demo.progress/demo.fundingreq)*100)}%
            </h4>*/}
            </Carousel.Caption>
          </Carousel.Item>
            )
          }
        )
      }
  </Carousel>
  </div>
      )
    }
  }

export default Dashboard
