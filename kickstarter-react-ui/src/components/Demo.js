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
