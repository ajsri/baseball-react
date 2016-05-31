import React, { Component } from 'react'
import { Link } from 'react-router'


class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let { main } = this.props;
    return (
      <div onClick={this.props.sampleActionAsync.bind(this)}>
        <button className="btn btn-primary">Click me</button>
        {main && main.action_sent &&
          <div>Congrats, you clicked the button</div>
        }
      </div>
    )
  }
}

export default Main