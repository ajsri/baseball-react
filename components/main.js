import React, { Component } from 'react'
import { Link } from 'react-router'

import Navbar from './navbar/navbar'

class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navbar />
        <ul>
          <li><Link to="/grid">Patterns</Link></li>
        </ul>
      </div>
    )
  }
}

export default Main