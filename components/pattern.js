import React, { Component } from 'react'
import { Link } from 'react-router'

import Navbar from './navbar/navbar'

class Pattern extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Navbar />
        <ul>
          <li><Link to="/">Main test</Link></li>
        </ul>
      </div>
    )
  }
}

export default Pattern