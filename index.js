import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>Loading</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('cyclops-react'));