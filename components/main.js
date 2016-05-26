import React, { Component } from 'react'
import { Link } from 'react-router'


class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
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

export default Main