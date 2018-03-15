import React from 'react'
import {Row, Col, PageHeader} from 'react-bootstrap';

const Demo = ({demo}) =>

<Row>
  <Col xs={12}>
    <PageHeader>
      Welcome TO THE DEMO PAGE PUT YOUTUBE HERE

      // <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" frameborder="0"></iframe>

    </PageHeader>
  </Col>
</Row>


// <div>
// <Row>
// <Col sm="3">
//   <Card>
//     <CardImg top width="20%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//     <CardBody>
//       <CardTitle>{demo.name}</CardTitle>
//       <CardSubtitle>Card subtitle</CardSubtitle>
//       <ul key={demo.id}>
//         <li> {demo.name}</li>
//         <li>Event_Date {demo.live}</li>
//         <li>description {demo.description}</li>
//         <li>Funding Req {demo.fundingreq}</li>
//         <li>Votes {demo.votes}</li>
//         <li>Event_id {demo.event_id}</li>
//       </ul>
//       <Button color="warning" >Button </Button>
//     </CardBody>
//   </Card>
//   </Col>
//  </Row>
// </div>



export default Demo
