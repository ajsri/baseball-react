import React, { Component } from 'react'
import { Link } from 'react-router'

import Navbar from './navbar/navbar'
import Toggle from './ui/toggle'

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
      </div>
    )
  }
}

export default Pattern