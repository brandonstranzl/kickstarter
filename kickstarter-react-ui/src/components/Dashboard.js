import React, { Component } from 'react';
import {Carousel, Row, Col, PageHeader} from 'react-bootstrap';
import { Button } from 'reactstrap';

const Dashboard = (props) => (
  // <Row>
  //   <Col xs={12}>
  //     <PageHeader>
  //       HOME HOME HOME Welcome <small>to the dashboard!</small>
  //     </PageHeader>
  //   </Col>
  // <Button color="danger">save !</Button>
  // </Row>
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + "/images/carousel.png"} />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + "/images/carousel.png"} />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + "/images/carousel.png"} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Dashboard