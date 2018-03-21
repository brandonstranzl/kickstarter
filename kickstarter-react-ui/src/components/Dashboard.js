import React, { Component } from 'react';
import {Carousel, Row, Col, PageHeader} from 'react-bootstrap';
import { Button } from 'reactstrap';
import Cookies from 'universal-cookie'


const Dashboard = (props) => (
  // <Row>
  //   <Col xs={12}>
  //     <PageHeader>
  //       HOME HOME HOME Welcome <small>to the dashboard!</small>
  //     </PageHeader>
  //   </Col>
  // <Button color="danger">save !</Button>
  // </Row>
  <Carousel className="carousel">
    <Carousel.Item>
      {/*<img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + "/images/carousel.png"} />*/}
      <iframe width="900" height="500" src="https://www.youtube.com/embed/S2S_4G103Ik" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      {/*<Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1492113726/articles/2016/04/23/welcome-to-the-devolution-the-high-tech-world-is-making-us-weak-and-weird/160422-mustain-weird-tech-tease_yiwuun" />
      {/*<Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://9to5mac.files.wordpress.com/2017/01/tech-brain-blue.jpg?quality=82&strip=all&strip=all&w=1600&h=1000" />
      {/*<Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>*/}
    </Carousel.Item>
  </Carousel>
)

export default Dashboard
