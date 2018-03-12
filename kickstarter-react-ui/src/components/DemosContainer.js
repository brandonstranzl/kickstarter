import React, { Component } from 'react'
import Demo from './Demo'

class DemosContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demos: []
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:3000/demos') //need to learn axios
    fetch('http://localhost:3000/demos')
    .then(res => res.json())
    .then(demos => this.setState({ demos }))
  }

  render() {
    return(
      <div>
        {this.state.demos.map((demo, id) => {
          return (
            <Demo demo={demo} key={demo.id} />
            )
        })}
      </div>
    )
  }
}


export default DemosContainer
