import React, { Component } from 'react'

class LineScore extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let { line } = this.props;
    let emptyInnings = [];
    let remainder = 9 - line.inning.length;
    for(let i = 0; i < remainder; i++){
      line.inning.push({home: "-", away: "-"});
    }
    return (
      <div className="linescore-container">
        {line.inning.map((inning, i) => {
          return (
            <div key={i} className="linescore-inning">
              <div>{i + 1}</div>
              <div className="linescore-inning-away">{inning.away}</div>
              <div className="linescore-inning-home">{inning.home ? inning.home : "-"}</div>
            </div>
          )
        })}
        <div className="linescore-inning">
          <div>R</div>
          <div className="runs">{line.r.away}</div>
          <div className="runs">{line.r.home}</div>
        </div>
        <div className="linescore-inning">
          <div>H</div>
          <div className="runs">{line.h.away}</div>
          <div className="runs">{line.h.home}</div>
        </div>
        <div className="linescore-inning">
          <div>E</div>
          <div className="runs">{line.e.away}</div>
          <div className="runs">{line.e.home}</div>
        </div>
      </div>
    )
  }
}

export default LineScore