import React, { Component } from 'react'
import {Row, Col, PageHeader} from 'react-bootstrap'

const Events = (props) => (
  <Row>
    <Col xs={12}>
      <PageHeader>
        Welcome <small>to the dashboard!</small>
      </PageHeader>
    </Col>
  </Row>
)

export default Events
