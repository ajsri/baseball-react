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
        <h1>Header 1</h1>
        <h2>Header 1</h2>
        <h3>Header 1</h3>
        <h4>Header 1</h4>
        <div>
          <p>Paragraph</p>
          <span>Span</span>
        </div>
      </div>
    )
  }
}

export default Main