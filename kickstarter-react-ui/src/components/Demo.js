import React from 'react'

const Demo = ({demo}) =>
  <ul className="tile" key={demo.id}>
    <li>Name {demo.name}</li>
    <li>Event_Date {demo.live}</li>
    <li>description {demo.description}</li>
    <li>Funding Request {demo.fundingreq}</li>
    <li>Votes {demo.votes}</li>
    <li>Event_id {demo.event_id}</li>

  </ul>

export default Demo
