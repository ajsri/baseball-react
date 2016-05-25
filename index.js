import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router'

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/patterns">Patterns</Link></li>
        </ul>
      </div>
    )
  }
}

class Patterns extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Main</Link></li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Router history={hashHistory}>
                  <Route path="/" component={Main} />
                  <Route path="/patterns" component={Patterns} />
                </Router>, document.getElementById('cyclops-react'));