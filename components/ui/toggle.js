import React, { Component, PropTypes } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <toggle>
        <div className="toggle">
          <label>
            <input type="checkbox" checked={this.props.checked}/>
            <div className="bug-fix">
              <span className="text">
                <span className="affirmative">{this.props.onText}</span> 
                <span className="negative">{this.props.offText}</span> 
              </span> 
              <svg className="handle" height="34" viewBox="0 0 28 34"> 
                <g> 
                  <rect x="10" y="12" fill="#777777" width="1" height="1"></rect> 
                  <rect x="17" y="12" fill="#777777" width="1" height="1"></rect> 
                  <rect x="13.5" y="12" fill="#777777" width="1" height="1"></rect> 
                  <rect x="10" y="15.5" fill="#777777" width="1" height="1"></rect> 
                  <rect x="17" y="15.5" fill="#777777" width="1" height="1"></rect> 
                  <rect x="13.5" y="15.5" fill="#777777" width="1" height="1"></rect> 
                  <rect x="10" y="19" fill="#777777" width="1" height="1"></rect>
                  <rect x="17" y="19" fill="#777777" width="1" height="1"></rect> 
                  <rect x="13.5" y="19" fill="#777777" width="1" height="1"></rect> 
                </g> 
              </svg> 
            </div> 
          </label> 
        </div>
      </toggle>
    )
  }
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  onText: PropTypes.string,
  offText: PropTypes.string
}
export default Toggle