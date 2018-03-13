import React from 'react'

const Demo = ({demo}) =>
  <div width="max">
  <ul className="tile" key={demo.id}>
    <li>Name {demo.name}</li>
    <li>Event_Date {demo.live}</li>
    <li>description {demo.description}</li>
    <li>Funding Req {demo.fundingreq}</li>
    <li>Votes {demo.votes}</li>
    <li>Event_id {demo.event_id}</li>
  </ul>
  </div>

export default Demo
