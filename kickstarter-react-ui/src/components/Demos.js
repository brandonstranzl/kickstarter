import React, { Component } from 'react'
import Demo from './Demo'
import $ from 'jquery';

class Demos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demos: []
    }
    // this.state.map = this.state.map.bind(this);
  }



  // componentDidMount() {
  //   // axios.get('http://localhost:3000/demos') //need to learn axios
  //   fetch('http://localhost:3000/demos')
  //   .then(res => res.json())
  //   .then(demos => this.setState({ demos }))
  // }

  componentDidMount() {
    $.get('http://localhost:3000/demos', function(res) {
      console.log("HERE IS THE RES :", res)
      this.setState({demos: res});
    }.bind(this));
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


export default Demos
