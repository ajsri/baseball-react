import { connect } from 'react-redux'
import { sampleAction } from '../actions/pattern'

import Pattern from '../components/pattern'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    sampleAction: () => {
      dispatch(sampleAction());
    }
  }
}

const Patterns = connect(mapStateToProps, mapDispatchToProps)(Pattern)

export default Patterns;