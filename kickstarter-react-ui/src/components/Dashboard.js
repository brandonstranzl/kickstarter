import React, { Component } from 'react'
import {Row, Col, PageHeader} from 'react-bootstrap'

const Dashboard = ({match}) => (
  <Row>
    <Col xs={12}>
      <PageHeader>
        HOME HOME HOME Welcome <small>to the dashboard!</small>
      </PageHeader>
    </Col>
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>


  </Row>


);


export default Dashboard
