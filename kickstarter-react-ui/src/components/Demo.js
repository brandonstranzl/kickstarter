import React from 'react'
import {Redirect} from 'react-router-dom'
// import Modal from './Modal'

// import {Row, Col, PageHeader} from 'react-bootstrap';

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      demoId: (this.props.match.params.id || null),
      demo: {},
      showDetails: true,
      redirect: '',
      }
    }

  // handleClose() {
  // this.setState({ show: false });
  // }
  //
  // handleShow() {
  //   this.setState({ show: true });
  // }

  componentWillMount() {
  if (!this.state.demoId) return
  fetch(`http://localhost:3000/demos/${this.props.match.params.id}`)
  .then(r => r.clone().json())
  .then(data => this.setState({ demo: data }))
  // .then(demos => this.setState({ demos: data }))
  .catch(e => console.log('parsing failed'))
  }

  // _hide = () => {
  // this.setState({show: false, redirect: '/demos'})
  // }

  render() {
    if (this.state.demo) {
      console.log('HERE PUTS THE DEMO:');
      console.log(this.state.demo);
    }
  if (this.state.redirect) return <Redirect to={this.state.redirect} />

    return (
    <div>
            You selected <strong>{this.state.demo.name}</strong>
    </div>
    )
  }
}
//

export default Demo

//
// <Row>
// <div>
//   <h3>ID: {props.name}</h3>
//
//
// </div>
//   <Col xs={12}>
//     <PageHeader>
//
//       Welcome TO THE DEMO PAGE PUT YOUTUBE HERE
//     </PageHeader>
//   </Col>
// </Row>
// );

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
